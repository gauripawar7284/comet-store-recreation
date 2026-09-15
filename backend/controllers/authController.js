const jwt = require("jsonwebtoken");
const User = require("../models/User");

function signToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

function toPublicUser(user) {
  return { id: user._id, name: user.name, email: user.email, role: user.role };
}

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password are required" });
    }
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(409).json({ message: "Email already registered" });

    const user = await User.create({ name, email, password });
    const token = signToken(user);
    res.status(201).json({ token, user: toPublicUser(user) });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: (email || "").toLowerCase() });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = signToken(user);
    res.json({ token, user: toPublicUser(user) });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
}

async function me(req, res) {
  res.json({ user: toPublicUser(req.user) });
}

module.exports = { register, login, me };
