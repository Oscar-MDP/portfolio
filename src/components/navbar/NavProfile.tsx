import { RiMenu3Fill } from "react-icons/ri";
interface NavProfileProps {
  image: string;
  onClick: () => void;
}
const NavProfile: React.FC<NavProfileProps> = ({ image, onClick }) => {
  return (
    <nav
      onClick={onClick}
      className="
        flex
        items-center
        gap-2
        border-[1px]
        py-1
        pl-3
        pr-1
        rounded-full
        hover:shadow-md
        cursor-pointer
    "
    >
      <RiMenu3Fill size={20} />
      <div
        className="
            w-[30px]
            overflow-hidden
            rounded-full
        "
      >
        <img
          className="
            w-full
            h-full
          "
          src={image || "/placeholder.jpg"}
          alt={image && "Photo profile"}
        />
      </div>
    </nav>
  );
};
export default NavProfile;
