import data from "../../data.json";

const HeroImg = () => {
  const { url, alt, title } = data["section-one"].images.back;
  const imgLeft = data["section-one"].images.left;
  const imgRight = data["section-one"].images.right;

  return (
    <div className='relative'>
      <img
        src={imgLeft.url}
        alt={alt}
        title={title}
        className='hidden lg:block absolute left-0 top-[50%] translate-x-[-50%]
        aspect-square
        '
      />
      <img
        src={url}
        alt={alt}
        title={title}
        landing='lazy'
        className='aspect-square max-h-[500px] object-cover'
      />
      <img
        src={imgRight.url}
        alt={alt}
        title={title}
        className='hidden lg:block absolute right-0 top-[40%] translate-x-[6%]'
      />
    </div>
  );
};
export default HeroImg;
