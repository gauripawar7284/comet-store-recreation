const express = require("express");
const {
  createCheckoutSession,
  myOrders,
  listAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { protect, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/checkout", protect, createCheckoutSession);
router.get("/mine", protect, myOrders);
router.get("/", protect, requireAdmin, listAllOrders);
router.put("/:id/status", protect, requireAdmin, updateOrderStatus);

module.exports = router;
