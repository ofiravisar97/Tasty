import Button from "../../../components/UI/Button";
import UserAvatar from "../../../components/UI/UserAvatar";
import useProfileDataContext from "../../../context/useProfileDataContext";
import ProfileInfoBio from "./ProfileInfoBio";
import ProfileInfoHeader from "./ProfileInfoHeader";
import ProfileInfoHeaderContent from "./ProfileInfoHeaderContent";

const ProfileInfoSection = () => {
  const { isMe, avatarURL, isFollowing } = useProfileDataContext();

  const bioButton = (
    <Button>{isMe ? "Edit" : isFollowing ? "Unfollow" : "Follow"}</Button>
  );

  return (
    <section className=" w-full lg:w-[40%] h-[60%] lg:h-full flex flex-col px-4 py-4 gap-8">
      <ProfileInfoHeader
        avatar={!isMe ? <></> : <UserAvatar src={avatarURL} />}
        content={<ProfileInfoHeaderContent />}
      />
      <ProfileInfoBio button={bioButton} />
    </section>
  );
};

export default ProfileInfoSection;
