import { ProfileDataContext } from "../../../context/useProfileDataContext";
import ProfileInfoSection from "./ProfileInfoSection";
import { USER } from "../../../DUMMY_DATA.ts";
import ProfileImageGrid from "./ProfileImageGrid.tsx";

const Profile = () => {
  return (
    <ProfileDataContext.Provider value={USER}>
      <main className="absolute top-[4rem] flex flex-col lg:flex-row w-full h-full">
        <ProfileInfoSection />
        <ProfileImageGrid />
      </main>
    </ProfileDataContext.Provider>
  );
};

export default Profile;
