import { ButtonHTMLAttributes, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { VscDiffAdded, VscBookmark, VscHome, VscHeart } from "react-icons/vsc";
import UserAvatar from "../../UI/UserAvatar";
import useNavigationContext from "../../../context/useNavigationContext";

type MenuItemLinkProps = {
  to: string;
  icon: ReactNode;
};

const MenuItemLink = ({ to, icon }: MenuItemLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border-b-4 border-primary h-full flex items-center px-8 lg:px-4"
          : "h-full px-8 lg:px-4 flex items-center"
      }
    >
      {icon}
    </NavLink>
  );
};

type MenuItemButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  icon: ReactNode;
};

const MenuItemButton = ({ onClick, icon, ...props }: MenuItemButtonProps) => {
  return (
    <button {...props} type="button" onClick={onClick} className="px-8 lg:px-4">
      {icon}
    </button>
  );
};

type MenuProps = {
  isBottom: boolean;
};

const Menu = ({ isBottom }: MenuProps) => {
  const { setAddRecipe, setProfileMenuOpen } = useNavigationContext();
  return (
    <nav className="h-full flex items-center justify-center">
      <MenuItemLink to="/" icon={<VscHome className="text-4xl" />} />
      <MenuItemButton
        onClick={() => {
          setAddRecipe((prev) => !prev);
        }}
        icon={<VscDiffAdded className="text-4xl" />}
      />
      <MenuItemButton
        onClick={() => {}}
        icon={<VscHeart className="text-4xl" />}
      />
      <MenuItemLink
        to="/bookmarks"
        icon={<VscBookmark className="text-4xl" />}
      />
      {!isBottom && (
        <MenuItemButton
          onClick={() => {
            setProfileMenuOpen((prev) => !prev);
          }}
          icon={
            <UserAvatar size="small" variant="rounded" clickable="clickable" />
          }
        />
      )}
    </nav>
  );
};

export default Menu;
