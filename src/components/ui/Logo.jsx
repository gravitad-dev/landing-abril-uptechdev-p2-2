import data from "../../data.json";
import logo from "../../assets/logo.png"

const Logo = ({ variant }) => {
  //const blueLogo = data.logo.url.blue;
  //const whiteLogo = data.logo.url.white;

  return variant === "blue" ? (
    <img src={logo} alt={data.logo.alt} className="h-[58px]" />
  ) : (
    <img src={logo} alt={data.logo.alt} className="h-[58px]" />
  );
};
export default Logo;
