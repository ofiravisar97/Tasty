import useScreenSize from "../../hooks/utils/useScreenSize";
import Searchbar from "../Search/Searchbar";
import Menu from "./Menu/Menu";
import { LARGE_WINDOW, MEDIUM_WINDOW } from "../../consts";
import BottomNav from "./BottomNav/BottomNav";
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
        <UserAvatar size="small" variant="rounded" clickable="clickable" />
      )}
      {isMobileLayout && <BottomNav />}
    </nav>
  );
};

export default Navbar;
