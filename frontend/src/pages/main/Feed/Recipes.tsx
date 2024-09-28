import { RECIPES } from "../../../DUMMY_DATA";
import { RecipePostDataType } from "../../../types/RecipePostType";
import Recipe from "./Recipe";

const Recipes = () => {
  return (
    <section className="absolute w-[95%] bg-red-700 lg:w-[50%] left-1/2 -translate-x-1/2">
      {RECIPES.map((recipe: RecipePostDataType) => (
        <Recipe recipe={recipe} />
      ))}
    </section>
  );
};

export default Recipes;
