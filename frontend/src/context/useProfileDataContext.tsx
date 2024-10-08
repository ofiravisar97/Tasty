import { createContext, useContext } from "react";
import { ProfileDataType } from "../types/ProfileDataType";

export const ProfileDataContext = createContext<ProfileDataType | null>(null);

const useProfileDataContext = () => {
  const context = useContext(ProfileDataContext);
  if (!context) {
    throw Error("Couldnt find profile data.");
  }
  return context;
};

export default useProfileDataContext;
