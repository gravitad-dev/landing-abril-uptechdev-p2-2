const CustomBtn = ({ variant, children }) => {
  return (
    <button
      className={`
        ${
          variant === "primary"
            ? "bg-blue text-light "
            : "bg-transparent border border-blue text-blue"
        }
        transition-transform duration-300 hover:scale-[0.95]
         font-semibold select-none py-2 px-4 rounded-md
        `}
    >
      {children}
    </button>
  );
};
export default CustomBtn;
