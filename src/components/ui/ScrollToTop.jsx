import { BsArrowUpShort } from "react-icons/bs";
import useScrolled from "../../hooks/useScrolled";

const ScrollToTop = () => {
  const { scrolled } = useScrolled();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        ${scrolled ? "block" : "hidden"}
        fixed p-1.5 bg-light/50 rounded-md right-[2vw] bottom-[5vh] shadow-md cursor-pointer
        `}
      onClick={handleScrollToTop}
    >
      <BsArrowUpShort size='25' />
    </div>
  );
};
export default ScrollToTop;
