import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const AppLayout = () => {
  const [addRecipeOpen, setAddRecipe] = useState(false);

  const handleCloseModal = () => {
    setAddRecipe(false);
  };

  const toggleModal = () => {
    setAddRecipe((prev) => !prev);
  };

  return (
    <>
      <Navbar openRecipeModal={toggleModal} />
      {addRecipeOpen && (
        <Modal onClose={handleCloseModal}>
          <div>Modal</div>
        </Modal>
      )}
      <Outlet />
    </>
  );
};

export default AppLayout;
