const CustomLink = ({ text, animated, ...props }) => {
  return (
    <a
      {...props}
      className='
   text-dark text-[16px] relative inline-block group hover:text-blue
     '
    >
      {text}
      {animated && (
        <span
          className='
      absolute bottom-[-2px] left-0 w-full h-0.5 bg-blue transform 
      scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100'
        />
      )}
    </a>
  );
};
export default CustomLink;
