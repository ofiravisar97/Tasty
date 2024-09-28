import { createContext, Dispatch, SetStateAction, useContext } from "react";

type NavigationContextType = {
  addRecipeOpen: boolean;
  setAddRecipe: Dispatch<SetStateAction<boolean>>;
  profileMenuOpen: boolean;
  setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null
);

const useNavigationContext = () => {
  const context = useContext(NavigationContext) as NavigationContextType;
  if (!context) {
    throw Error("couldnt find navigation context");
  }
  return context;
};

export default useNavigationContext;
