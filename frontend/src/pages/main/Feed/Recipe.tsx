import { RecipePostDataType } from "../../../types/RecipePostType";

type Props = {
  recipe: RecipePostDataType;
};

const Recipe = ({ recipe }: Props) => {
  return <article>{recipe.title}</article>;
};

export default Recipe;
