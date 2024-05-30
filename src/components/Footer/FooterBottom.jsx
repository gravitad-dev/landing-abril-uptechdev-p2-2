import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";

const FooterBottom = () => {
  const { copyright, other_links } = data["section-footer"];
  return (
    <div className='flex gap-4 lg:gap-10 flex-wrap items-center lg:mt-[90px]  text-center'>
      <ul className='flex  items-center justify-center gap-8  w-full'>
        {other_links.map((link) => (
          <li key={uuidv4()} className='text-[12px]'>
            <a href={link.href} title={link.title}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <p className='text-[14px] w-full'>{`© ${new Date().getFullYear()} ${copyright}`}</p>
    </div>
  );
};
export default FooterBottom;
