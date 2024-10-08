import { VscBookmark, VscNotebook } from "react-icons/vsc";

const ProfileImageGrid = () => {
  return (
    <section className="w-[60%]">
      <ul className="flex w-[80%] mx-auto mt-4">
        <li className="flex items-center gap-4 justify-center flex-grow py-4 border-b-2 border-neutral-300">
          <VscBookmark />
          Bookmarks
        </li>
        <li className="flex items-center gap-4 flex-grow py-4 justify-center border-b-2 border-neutral-300">
          <VscNotebook />
          Recipes
        </li>
      </ul>
    </section>
  );
};

export default ProfileImageGrid;
