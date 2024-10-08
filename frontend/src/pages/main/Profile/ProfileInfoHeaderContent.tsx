import useProfileDataContext from "../../../context/useProfileDataContext";

const TagNCount = ({ count, tag }: { count: number; tag: string }) => {
  return (
    <li className="flex flex-col items-center">
      <h4>
        <strong>{tag}</strong>
      </h4>
      <p>{count}</p>
    </li>
  );
};

const ProfileInfoHeaderContent = () => {
  const { username, recipesCount, bookmarksCount, followersCount } =
    useProfileDataContext();
  return (
    <div className=" w-full flex flex-col items-center gap-2">
      <h1 className="font-semibold text-2xl">@{username}</h1>
      <ul className="flex gap-4">
        <TagNCount tag="Followers" count={followersCount} />
        <TagNCount tag="Recipes" count={recipesCount} />
        <TagNCount tag="Bookmarks" count={bookmarksCount} />
      </ul>
    </div>
  );
};

export default ProfileInfoHeaderContent;
