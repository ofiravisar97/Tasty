import Menu from "../Menu/Menu";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 h-[4rem] shadow-md border-t-4  border-neutral-300 w-screen bg-white">
      <Menu isBottom={true} />
    </nav>
  );
};

export default BottomNav;
