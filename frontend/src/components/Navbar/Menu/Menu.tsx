import { ButtonHTMLAttributes, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { VscDiffAdded, VscBookmark, VscHome, VscHeart } from "react-icons/vsc";
import UserAvatar from "../../UI/UserAvatar";

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
          ? "border-b-4 border-primary h-full flex items-center px-4"
          : "h-full px-4 flex items-center"
      }
    >
      {icon}
    </NavLink>
  );
};

type MenuItemButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
};

const MenuItemButton = ({ icon, ...props }: MenuItemButtonProps) => {
  return (
    <button {...props} type="button" >
      {icon}
    </button>
  );
};

type Props = {
  openRecipeModal: () => void;
};

const Menu = ({ openRecipeModal }: Props) => {
  return (
    <nav className="h-full flex items-center justify-center">
      <MenuItemLink to="/" icon={<VscHome className="text-4xl" />} />
      <MenuItemButton
        onClick={openRecipeModal}
        icon={<VscDiffAdded className="text-4xl" />}
        className="px-4"
      />
      <MenuItemButton
        icon={<VscHeart className="text-4xl" />}
      />
      <MenuItemLink
        to="/bookmarks"
        icon={<VscBookmark className="text-4xl" />}
      />
      <UserAvatar size="small" variant="rounded" clickable="clickable" />
    </nav>
  );
};

export default Menu;
