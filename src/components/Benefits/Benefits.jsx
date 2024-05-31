import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";

const Benefits = () => {
  const { img, benefits } = data["section-six"];

  return (
    <div>
      <h1 className="flex justify-center py-7 font-semibold text-4xl font-playfair">
        Our Services
      </h1>

      <div
        id="benefits"
        className="grid pt-20  lg:place-items-center grid-cols-1 md:grid-cols-2 gap-10"
      >
        <img
          src={img.url}
          alt={img.alt}
          title={img.title}
          className="max-h-[400px] w-full"
        />

        <div className="flex flex-col gap-5">
          {benefits.map((b) => (
            <div
              key={uuidv4()}
              className="flex flex-col items-center text-center gap-2
          md:items-start md:text-left
          "
            >
              {/* icon */}
              <div className="mb-2">
                <img src={b.icon.url} alt={b.icon.alt} />
              </div>
              {/* text */}
              <h3 className="font-playfair text-[18px] md:text-[20px] font-semibold">
                {b.title}
              </h3>
              <p className="text-[14px] max-w-[400px] ">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Benefits;
