import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "register") {
      navigate("/register");
    } else if (id !== "home" && id !== "features") {
      navigate(`/${id}`);
    }
    setActive(id);
    setToggle(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[174px] h-[112px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[20px] ${
              active === nav.title ? "text-[#000000]" : "text-[#151915]"
            } ${index === navLinks.length - 1 ? "mr-4" : "mr-20"}`}
            onClick={() => handleClick(nav.id)}
          >
            {nav.id === "register" ? (
              <RouterLink to="/register">{nav.title}</RouterLink>
            ) : nav.id === "home" || nav.id === "features" ? (
              <ScrollLink to={nav.id} smooth={true} duration={300}>
                {nav.title}
              </ScrollLink>
            ) : (
              <RouterLink to={`/${nav.id}`}>{nav.title}</RouterLink>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleClick(nav.id)}
              >
                {nav.id === "register" ? (
                  <RouterLink to="/register">{nav.title}</RouterLink>
                ) : nav.id === "home" || nav.id === "features" ? (
                  <ScrollLink to={nav.id} smooth={true} duration={700}>
                    {nav.title}
                  </ScrollLink>
                ) : (
                  <RouterLink to={`/${nav.id}`}>{nav.title}</RouterLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
