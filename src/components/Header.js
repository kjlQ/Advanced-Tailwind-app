import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="fixed top-2 w-full flex justify-center">
      <div className="flex justify-center gap-x-10 bg-primary w-fit py-5 px-14 rounded-3xl ">
        {menuItem.map((item) => (
          <Link className="" to={item.path}>
            <div
              className={`${
                item.path === location.pathname && "border-b border-secondary opacity-100"
              } text-secondary text-2xl px-2 opacity-90 hover:opacity-100`}
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
