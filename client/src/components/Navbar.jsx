import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
const NavbarItem = ({ title, classProps }) => {
  return <li className={"mx-4 cursor-pointer &{classprps}"}>{title}</li>;
};
const Navbar = () => {
  return (
    <nav className=" w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo " className="w-32 cursor-pointer" />
        <ul className=" text-white md:flex hiddent list-none flex-row justify-between items-center"></ul>
      </div>
    </nav>
  );
};
export default Navbar;
