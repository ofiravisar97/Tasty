import { FaMagnifyingGlass } from "react-icons/fa6";

const Searchbar = () => {
  return (
    <div className="relative border border-neutral-300 shadow-sm rounded-lg overflow-hidden flex-grow sm:flex-grow-0 gap-8">
      <FaMagnifyingGlass className="absolute top-1/2 -translate-y-1/2 left-[0.5rem] text-neutral-300" />
      <input
        placeholder="Search anything..."
        className="pl-[32px] py-1 h-full outline-none"
      />
    </div>
  );
};

export default Searchbar;
