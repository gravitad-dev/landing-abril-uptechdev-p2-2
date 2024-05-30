import data from "../../data.json";

const Logo = ({ variant }) => {
  const blueLogo = data.logo.url.blue;
  const whiteLogo = data.logo.url.white;

  return variant === "blue" ? (
    <img src={blueLogo} alt={data.logo.alt} />
  ) : (
    <img src={whiteLogo} alt={data.logo.alt} />
  );
};
export default Logo;
