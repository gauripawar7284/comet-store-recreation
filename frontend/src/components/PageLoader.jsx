export default function PageLoader() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-black
      "
    >
      <img
        src="/images/pageloadImage.gif"
        alt="Loading"
        className="h-auto w-[155px] sm:w-[180px]"
      />
    </div>
  );
}
