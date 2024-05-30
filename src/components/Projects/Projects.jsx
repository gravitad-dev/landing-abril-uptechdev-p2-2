import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";

const Projects = () => {
  const { projects, title } = data["section-five"];

  return (
    <div id='projects'>
      <h2 className='subtitle font-playfair text-center'>{title}</h2>

      <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project) => (
          <div key={uuidv4()} className=' rounded-md overflow-hidden '>
            <img
              src={project.img.url}
              alt={project.img.alt}
              title={project.img.title}
              className='h-[250px] w-full object-cover'
            />
            <div className='py-10 text-center bg-light'>
              <h4 className='mb-2 text-[18px] md:text-[20px] font-semibold'>
                {project.title}
              </h4>
              <p className='text-[14px] text-dark-medium max-w-[400px] mx-auto'>
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
