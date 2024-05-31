import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";

const Projects = () => {
  const { projects, title } = data["section-five"];

  return (
    <div id="projects">
      <h2 className="subtitle font-playfair text-center">{title}</h2>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div key={uuidv4()} className=" rounded-md overflow-hidden ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1717134948/ynjs7nkx5zuchdkcjitf.jpg"
            alt="imgProject1"
            title="project1"
            className="h-[250px] w-full object-cover"
          />
          <div className="py-10 text-center bg-light">
            <h4 className="mb-2 text-[18px] md:text-[20px] font-semibold">
              What Makes Us Different
            </h4>
            <ul className="text-start mx-5">
              <li>
                <span className="font-semibold">Innovation at Core:</span> We
                are constantly exploring new AI technologies to bring the most
                advanced solutions to our clients.
              </li>
              <li>
                <span className="font-semibold">Customization:</span> Our
                services are tailored to fit the specific needs of each client,
                ensuring personalized and effective solutions.
              </li>
              <li>
                <span className="font-semibold">Quality Assurance:</span> We
                adhere to the highest standards of quality, ensuring that every
                piece of content we create is of the utmost excellence.
              </li>
              <li>
                <span className="font-semibold">Expert Team:</span> Our team
                comprises experts in AI, content creation, and digital
                marketing, providing a comprehensive approach to automation.
              </li>
            </ul>
          </div>
        </div>
        {/* Item 2 */}
        <div key={uuidv4()} className=" rounded-md overflow-hidden ">
          <img
            src="https://res.cloudinary.com/dmln0fwl5/image/upload/v1714502922/projects/ynp8fu1htujb00fih7ht.webp"
            alt="imgProject2"
            title="Why Trust Us"
            className="h-[250px] w-full object-cover"
          />
          <div className="py-10 text-center bg-light">
            <h4 className="mb-2 text-[18px] md:text-[20px] font-semibold">
              Why Trust Us
            </h4>
            <ul className="text-start mx-5">
              <li>
                <span className="font-semibold">Proven Expertise:</span> With
                years of experience in AI and content creation, we have a track
                record of delivering exceptional results.
              </li>
              <li>
                <span className="font-semibold">Client-Centric Approach:</span>{" "}
                We prioritize our client{"'"}s needs and work closely with them
                to achieve their goals.
              </li>
              <li>
                <span className="font-semibold">Transparency:</span> We maintain
                open communication throughout our projects, ensuring you are
                informed and involved every step of the way.
              </li>
              <li>
                <span className="font-semibold">Continuous Improvement:</span>{" "}
                We are committed to continuous learning and improvement, staying
                ahead of industry trends to offer the best solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
