import Recipes from "./Recipes";

const Feed = () => {
  return (
    <div className="min-h-screen relative">
      <main className="absolute h-fit w-full top-[4rem] bg-neutral-200">
        <Recipes />
      </main>
    </div>
  );
};

export default Feed;
