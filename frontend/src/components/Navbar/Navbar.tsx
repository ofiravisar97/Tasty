import useScreenSize from "../../hooks/utils/useScreenSize";
import Searchbar from "../Search/Searchbar";
import Menu from "./Menu/Menu";
import {  MEDIUM_WINDOW } from "../../consts";
import UserAvatar from "../UI/UserAvatar";

type Props = {
  openRecipeModal: () => void;
};

const Navbar = ({ openRecipeModal }: Props) => {
  const { width } = useScreenSize();

  const isMobileLayout = width < MEDIUM_WINDOW;

  return (
    <div className="w-full h-[4rem] shadow-md gap-8 border-neutral-300 border-b-2 px-2 flex justify-between md:justify-around items-center">
      {!isMobileLayout && (
        <h2 className="text-pretty font-bold drop-shadow-lg text-3xl">
          TastyTies
        </h2>
      )}
      <Searchbar />
      {!isMobileLayout ? (
        <Menu openRecipeModal={openRecipeModal} />
      ) : (
        <UserAvatar />
      )}
    </div>
  );
};

export default Navbar;
