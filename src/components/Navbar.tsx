import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
//import logo from "../assets/logo.png";
import Btn from "./Btn";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";
const Navbar = ({ register = "/registration", login = "/login" }) => {
  const { authDetails } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const location = useLocation(); // Get current route location

  // Close menu when route changes
  useEffect(() => {
    setMenu(false);
  }, [location.pathname]); // Runs every time the pathname changes


  return (
    <nav
      className="sticky top-0 left-0 right-0 z-20 max-w-peak min-h-14 w-full mx-auto flex p-3 px-sm md:px-md lg:px-lg justify-between items-center flex-wrap md:flex-nowrap transition-all duration-300 bg-white shadow-md">
      <Link to="/" className="flex justify-center items-center mr-auto">
        {/*<img src={logo} alt="logo" className="w-28 md:w-32" />*/}
        <h1 className="text-2xl text-white font-semibold">MyÀjo</h1>
      </Link>

      <div
        className={`${!menu
          ? "hidden"
          : "absolute top-16 left-0 right-0 bg-white flex flex-col px-4"
          } lg:flex lg:flex-row lg:static lg:bg-transparent lg:items-center lg:gap-4 my-3 mx-auto gap-2 font-bold text-sm order-1 w-full lg:w-max lg:order-0 *:p-2 *:cursor-pointer hover:*:hover:text-slate-600`}
      >
        <NavLink to="/" className="[&.active]:text-slate-600 text-slate-500">
          Home
        </NavLink>
        <NavLink
          className="[&.active]:text-slate-600 text-slate-500"
          to="/events"
        >
          Find Events
        </NavLink>
        <NavLink
          className="[&.active]:text-slate-600 text-slate-500"
          to="/pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className="[&.active]:text-slate-600 text-slate-500"
          to="/about"
        >
          About Us
        </NavLink>

        {!authDetails?.user && <div className="cursor-default flex md:hidden items-center gap-3 lg:order-2">
          <Btn title="Get Started" loc={register} styl="bg-primary text-white" />
          <Btn
            title="Login"
            loc={login}
            styl="bg-transparent border-2 border-primary text-primary"
          />
        </div>}
      </div>

      {authDetails?.user ?
        <div className="lg:order-2 ml-auto hidden md:flex items-center gap-4 text-gray-600">

          <ProfileDropdown fullMode={true} user={authDetails?.user} />
        </div>

        : <div className="hidden md:flex items-center justify-center gap-3 lg:order-2 ml-auto">
          <Btn title="Get Started" loc={register} styl="bg-primary text-white" />
          <Btn
            title="Login"
            loc={login}
            styl="bg-transparent border-2 border-primary text-primary"
          />
        </div>}


      {authDetails?.user &&
        <div className="lg:order-2 ml-auto flex md:hidden items-center gap-4 text-gray-600">

          <ProfileDropdown fullMode={true} user={authDetails?.user} />
        </div>
        }
        
      <div
        onClick={() => setMenu(!menu)}
        className="mx-2 block lg:hidden transition-all ease-in-out duration-300 cursor-pointer"
      >
        {!menu ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
