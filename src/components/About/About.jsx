import data from "../../data.json";

const About = () => {
  const { img, title, desc } = data["section-seven"];
  return (
    <div id='about' className='grid grid-cols-1 md:bg-light md:p-10'>
      <h2 className='subtitle font-playfair text-center mb-10'>About</h2>
      <img
        src={img.url}
        alt={img.alt}
        title={img.title}
        className='max-h-[400px] mb-10 w-full object-cover'
      />
      {/* texts */}
      <div className='flex flex-col text-center md:text-left md:flex-row gap-4 md:justify-between'>
        <h2 className='subtitle text-blue max-w-[500px] flex-1'>{title}</h2>
        <p className='text-pretty text-[14px] text-dark-medium max-w-[400px] mx-auto  flex-1'>
          {desc}
        </p>
      </div>
    </div>
  );
};
export default About;
