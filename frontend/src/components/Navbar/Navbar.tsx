import useScreenSize from "../../hooks/utils/useScreenSize";
import Searchbar from "../Search/Searchbar";
import Menu from "./Menu/Menu";
<<<<<<< HEAD
import { LARGE_WINDOW, MEDIUM_WINDOW } from "../../consts";
import BottomNav from "./BottomNav/BottomNav";
=======
import {  MEDIUM_WINDOW } from "../../consts";
>>>>>>> ea269cc992ffb0bface49c01b9e0eb05344e848a
import UserAvatar from "../UI/UserAvatar";

const Navbar = () => {
  const { width } = useScreenSize();
  const isMobileLayout = width < MEDIUM_WINDOW;

  return (
    <nav className="bg-white w-screen h-[4rem] shadow-md gap-8 z-10 border-neutral-200 border-b-1 px-2 flex justify-between md:justify-around items-center fixed">
      {width >= LARGE_WINDOW && (
        <h2 className="text-pretty font-bold drop-shadow-lg text-3xl">
          TastyTies
        </h2>
      )}
      <Searchbar />
      {!isMobileLayout ? (
        <Menu isBottom={false} />
      ) : (
<<<<<<< HEAD
        <UserAvatar size="small" variant="rounded" clickable="clickable" />
=======
        <UserAvatar />
>>>>>>> ea269cc992ffb0bface49c01b9e0eb05344e848a
      )}
      {isMobileLayout && <BottomNav />}
    </nav>
  );
};

export default Navbar;
