import data from "../../data.json";
import CustomBtn from "../ui/CustomBtn";

const Contact = () => {
  const { contact, title, button, desc, img } = data["section-nine"];

  return (
    <div
      id='contact'
      className='grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center bg-light p-10 rounded-md'
    >
      <div className=' text-center'>
        <h2 className='subtitle text-[95px] font-playfair text-blue'>
          {title}
        </h2>
        <p className='my-4 text-[14px] max-w-[500px]'>{desc}</p>
        <CustomBtn variant='primary'>
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
      {/* img */}
      <img src={img.url} alt={img.alt} title={img.title} />
    </div>
  );
};
export default Contact;
