import { RECIPES } from "../../../DUMMY_DATA";
import { RecipePostDataType } from "../../../types/RecipePostType";
import Recipe from "./Recipe";

const Recipes = () => {
  return (
    <section className="absolute h-fit w-[95%] px-2 lg:w-[50%] left-1/2 -translate-x-1/2">
      {RECIPES.map((recipe: RecipePostDataType) => (
        <Recipe recipe={recipe} />
      ))}
    </section>
  );
};

export default Recipes;
