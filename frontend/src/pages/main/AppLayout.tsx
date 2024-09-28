import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { NavigationContext } from "../../context/useNavigationContext";

const AppLayout = () => {
  const [addRecipeOpen, setAddRecipe] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleCloseModal = () => {
    setAddRecipe(false);
  };

  return (
    <>
      <NavigationContext.Provider
        value={{
          addRecipeOpen,
          setAddRecipe,
          profileMenuOpen,
          setProfileMenuOpen,
        }}
      >
        <Navbar />
        {addRecipeOpen && (
          <Modal onClose={handleCloseModal}>
            <div>Modal</div>
          </Modal>
        )}
      </NavigationContext.Provider>
      <Outlet />
    </>
  );
};

export default AppLayout;
