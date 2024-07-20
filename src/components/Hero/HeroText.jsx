import data from '../../data.json';
import CustomBtn from '../ui/CustomBtn';

const HeroText = () => {
  const title = data['section-one'].title;
  const highlightedText = data['section-one'].highlightedText;
  const desc = data['section-one'].desc;

  return (
    <div className='flex flex-col gap-4 items-center text-center md:text-left md:items-start text-balance max-w-[600px]'>
      <h1 className='text-[30px] md:text-[40px] font-bold font-playfair'>
        {title} <span className='text-blue'>{highlightedText}</span>
      </h1>
      <p className='text-dark-medium  text-pretty w-[80%] text-[14px] md:text-[16px]'>
        {desc}
      </p>
    </div>
  );
};
export default HeroText;
