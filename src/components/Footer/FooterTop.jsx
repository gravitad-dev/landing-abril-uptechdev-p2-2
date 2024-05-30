import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";
import Logo from "../ui/Logo";

const FooterTop = () => {
  const { text, footer_link } = data["section-footer"];

  return (
    <div className='mb-5 flex flex-col md:flex-row md:justify-between'>
      {/* logo and text */}
      <div className='w-full'>
        <div className='mx-auto w-max md:mx-0'>
          <Logo variant='whiteLogo' />
        </div>
        <p className='mt-4 text-[14px] max-w-[500px] text-center md:text-left'>
          {text}
        </p>
      </div>
      {/* links */}
      <ul
        className='my-10 md:my-0 grid grid-cols-2 lg:grid-cols-4 gap-4  *:text-center  w-full
      *:bg-light/5  *:p-2 *:rounded *:text-[14px]
      '
      >
        {data["section-nav"].links.map(({ title, text, href }) => (
          <li key={uuidv4()}>
            <a href={href} title={title}>
              {text}
            </a>
          </li>
        ))}
        <li>
          <a
            href={footer_link.href}
            title={footer_link.title}
            rel='noreferrer'
            target='_blank'
          >
            {footer_link.text}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default FooterTop;
