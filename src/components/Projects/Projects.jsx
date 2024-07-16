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
              Qué nos diferencia
            </h4>
            <ul className="text-start mx-5">
              <li>
                <span className="font-semibold">Innovación en el núcleo:</span>{" "}
                exploramos constantemente nuevas tecnologías de inteligencia
                artificial para brindar las soluciones más avanzadas a nuestros
                clientes.
              </li>
              <li>
                <span className="font-semibold">Personalización:</span> Nuestros
                servicios se adaptan a las necesidades específicas de cada
                cliente, garantizando soluciones personalizadas y efectivas.
              </li>
              <li>
                <span className="font-semibold">Garantía de calidad:</span> Nos
                adherimos a los más altos estándares de calidad, asegurando que
                cada contenido que creamos sea de la máxima excelencia.
              </li>
              <li>
                <span className="font-semibold">Equipo de expertos:</span>{" "}
                nuestro equipo está compuesto por expertos en inteligencia
                artificial, creación de contenido y marketing digital, lo que
                brinda un enfoque integral para la automatización.
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
              ¿Por qué confiar en nosotros?
            </h4>
            <ul className="text-start mx-5">
              <li>
                <span className="font-semibold">Experiencia comprobada:</span>{" "}
                con años de experiencia en inteligencia artificial y creación de
                contenido, tenemos un historial de brindar resultados
                excepcionales.
              </li>
              <li>
                <span className="font-semibold">
                  Enfoque centrado en el cliente:
                </span>{" "}
                priorizamos las necesidades de nuestros clientes y trabajamos
                estrechamente con ellos para lograr sus objetivos.
              </li>
              <li>
                <span className="font-semibold">Transparencia:</span> Mantenemos
                una comunicación abierta a lo largo de nuestros proyectos,
                asegurando que usted esté informado e involucrado en cada paso
                del camino.
              </li>
              <li>
                <span className="font-semibold">Mejora Continua:</span> Estamos
                comprometidos con el aprendizaje y la mejora continua,
                manteniéndonos a la vanguardia de las tendencias de la industria
                para ofrecer las mejores soluciones.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
