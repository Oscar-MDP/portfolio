import NavProfile from "./NavProfile";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  label: string;
  to: string;
}
const NavItem: React.FC<NavItemProps> = ({ label, to }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          (isActive ? "border-inherit" : "border-transparent") +
          `
            py-4 px-1 border-b-[2px] `
        }
      >
        {label}
      </NavLink>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav
        className="
            px-12
            py-2
            flex
            justify-between
            items-center
            w-full
            shadow-md
            backdrop-blur-sm
        "
      >
        <div className="flex gap-3">
          <NavItem to="/" label="Home" />
          <NavItem to="/portfolio" label="Portfolio" />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/profile/about" label="About" />
        </div>
        <NavProfile onClick={() => {}} image="" />
      </nav>
    </>
  );
};
export default Navbar;
