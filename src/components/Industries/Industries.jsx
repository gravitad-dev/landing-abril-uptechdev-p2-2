import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";

const Industries = () => {
  const { title, industries } = data["section-two"];

  return (
    <div>
      <h2 className="subtitle font-playfair text-center" id="industries">
        {title}
      </h2>
      <div className=" mt-10 flex flex-wrap gap-10 justify-center lg:justify-between">
        {industries.map(({ url, alt, title }) => (
          <img
            src={url}
            alt={alt}
            title={title}
            className="
            w-[100px]
          "
          />
        ))}
      </div>
    </div>
  );
};
export default Industries;
