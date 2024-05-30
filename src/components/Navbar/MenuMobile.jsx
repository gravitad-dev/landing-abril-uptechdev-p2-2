import { v4 as uuidv4 } from "uuid";

import data from "../../data.json";
import CustomLink from "../ui/CustomLink";

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-black/30 w-full h-screen fixed inset-0 md:hidden`}
      onClick={onClick}
    >
      <ul
        className={`
        fixed  left-0 top-0 px-2 py-5 h-screen
        w-[250px] flex flex-col gap-4  items-start text-dark bg-nav shadow-md shadow-black/10
        `}
      >
        {data["section-nav"].links.map(({ text, href, isExternal, title }) =>
          isExternal ? (
            <li key={uuidv4()} className='p-2'>
              <CustomLink
                text={text}
                href={href}
                animated
                rel='noreferrer'
                target='_blank'
                title={title}
              />
            </li>
          ) : (
            <li key={uuidv4()} className='p-2'>
              <CustomLink text={text} href={href} animated title={title} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default MenuMobile;
