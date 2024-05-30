import { v4 as uuidv4 } from "uuid";

import data from "../../data.json";
import CustomBtn from "../ui/CustomBtn";
import CustomLink from "../ui/CustomLink";

const MenuDesktop = () => {
  return (
    <nav className='w-full  justify-between hidden md:flex'>
      <ul className='flex mx-auto'>
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
      {/* btn */}

      <CustomBtn variant='primary'>
        <a
          href={data["section-nav"].button.href}
          title={data["section-nav"].button.title}
          rel='noreferrer'
          target='_blank'
        >
          {data["section-nav"].button.text}
        </a>
      </CustomBtn>
    </nav>
  );
};
export default MenuDesktop;
