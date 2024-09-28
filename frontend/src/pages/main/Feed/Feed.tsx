import Recipes from "./Recipes";

const Feed = () => {
  return (
    <div className="h-screen relative">
      <main className="absolute h-[calc(100%-4rem)] w-full top-[4rem] bg-neutral-200">
        <Recipes />
      </main>
    </div>
  );
};

export default Feed;
