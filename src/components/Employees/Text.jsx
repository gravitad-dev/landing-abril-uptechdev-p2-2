import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";
import CustomBtn from "../ui/CustomBtn";

const Text = () => {
  const { title, desc, button } = data["section-three"];

  return (
    <div className='text-center lg:text-left'>
      <h2 className='subtitle font-playfair'>{title}</h2>
      <p className='my-4 text-[14px] '>{desc}</p>
      <CustomBtn variant='secondary'>
        <a
          href={button.href}
          title={button.title}
          rel='noreferrer'
          target='_blank'
        >
          {button.text}
        </a>
      </CustomBtn>
    </div>
  );
};
export default Text;
