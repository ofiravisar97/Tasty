import { VscHeart,VscBookmark,VscComment } from "react-icons/vsc";
import UserAvatar from "../../../components/UI/UserAvatar";
import { RecipePostDataType } from "../../../types/RecipePostType";

type Props = {
  recipe: RecipePostDataType;
};

const Recipe = ({ recipe }: Props) => {
  return <article className="bg-white h-fit mt-4 rounded-md shadow-md flex flex-col">
    <section className="flex gap-4 p-2">
      <UserAvatar src={recipe.avatarURL} size='small' variant='rounded'/>
      <div>
        <h1 className="font-semibold">{recipe.title}</h1>
        <h3 className="text-neutral-600">@{recipe.username}</h3>
      </div>
    </section>
    <section className="">
    <img src={recipe.imageURL} alt="Recipe image" className="min-w-full min-h-full object-cover"/>
    </section>
    <section className="px-2 py-4 flex gap-2 w-full">
        <VscHeart size={32} className="cursor-pointer"/>
        <VscComment size={32} className="cursor-pointer"/>
        <VscBookmark size={32} className="ml-auto cursor-pointer"/>
    </section>
    <section className="flex px-2 py-2 gap-2 w-full">
      <p className="font-semibold">{recipe.likesCount} likes</p>
      <p className="ml-auto">{recipe.createdAt}</p>
    </section>
    <section className="px-2 py-2">
      <p>View all {recipe.messagesCount} messages</p>
    </section>
  </article>;
};

export default Recipe;
