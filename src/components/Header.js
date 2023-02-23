import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const menuItem = [
  {
    title: "Home",
    path: "/",
    icon: "",
  },
  {
    title: "About",
    path: "/about",
    icon: "",
  },
  {
    title: "Clients",
    path: "/clients",
    icon: "",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "",
  },
];

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const location = useLocation();

  return (
    <div
      className={`fixed top-2 w-full z-50 flex justify-center ${
        showHeader
          ? "slide-down opacity-100 transition duration-300 ease-in-out transform"
          : "slide-up opacity-0 transition duration-300 ease-in-out transform "
      }`}
    >
      <div className="flex justify-center gap-x-10 bg-primary w-fit py-4 px-10 rounded-2xl ">
        {menuItem.map((item) => (
          <Link className="" to={item.path}>
            <div
              className={`${
                item.path === location.pathname && "border-b border-secondary opacity-100"
              } text-secondary text-xl px-2 opacity-90 hover:opacity-100`}
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
