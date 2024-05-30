import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";

import useEmblaCarousel from "embla-carousel-react";

const Reviews = () => {
  const { reviews, title } = data["section-eight"];
  const [emblaRef] = useEmblaCarousel();

  return (
    <div id='reviews'>
      <h2 className='subtitle font-playfair text-center'>{title}</h2>
      <div className='embla min-h-[250px] mt-[40px]' ref={emblaRef}>
        <div className='embla__container h-full'>
          {reviews.map((review) => (
            <div
              className='embla__slide rounded-md bg-light  p-5 cursor-pointer'
              key={uuidv4()}
            >
              <h3 className='font-playfair'>{review.comment}</h3>
              {/* container img and text */}
              <div className='flex items-center gap-4 mt-5'>
                <img
                  src={review.picture.url}
                  alt={review.picture.alt}
                  title={review.picture.title}
                  className='h-10 w-10 rounded-full object-cover'
                />
                {/* name and role */}
                <div>
                  <p className='text-[18px]'>{review.name}</p>
                  <span className='text-[14px] text-dark-medium'>
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Reviews;
