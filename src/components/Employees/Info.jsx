import { BsCheck2Circle } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";

const Info = () => {
  const { info_employess, info_texts } = data["section-three"];

  return (
    <div className='mb-10'>
      {/* items */}
      <div className='flex flex-wrap gap-10 justify-start'>
        {info_employess.map(({ name, role, picture }) => (
          <div className='flex gap-4 items-center' key={uuidv4()}>
            <img
              src={picture.url}
              alt={picture.alt}
              title={picture.title}
              className='
            w-[64px] h-[64px] rounded-full
            object-cover
          '
            />
            <div>
              <p className='text-[18px]'>{name}</p>
              <p className='text-dark-medium text-[14px]'>{role}</p>
            </div>
          </div>
        ))}
      </div>
      {/* list */}
      <div className='bg-light p-4 mt-10 rounded-md  hidden lg:flex  flex-col gap-4'>
        {info_texts.map((item) => (
          <div
            key={uuidv4()}
            className='flex content-center justify-start gap-4'
          >
            <div className='flex items-center justify-center'>
              <BsCheck2Circle size='24' className='text-blue' />
            </div>
            <p className='text-[14px] text-dark-medium'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Info;
