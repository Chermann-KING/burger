import { styled } from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { theme } from "../../../theme/theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "./Main/Admin/AdminPanel/AddForm";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const [products, setProducts] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  // comportement
  const handleAdd = (newProduct) => {
    // copie du tableau
    const copyProducts = [...products];
    // manipulation de la copie du tableau (insert newProduct dans la copie)
    const productsUpdate = [newProduct, ...copyProducts];
    // update du setProducts
    setProducts(productsUpdate);
  };

  const handleDelete = (idOfProductToDelete) => {
    // 1. Copie du tableau
    const productsCopy = [...products];

    // 2. Manipulation de la copie du tableau (filtre produit via son id dans la copie)
    const productsUpdated = productsCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );

    // 3. Update du setProducts
    setProducts(productsUpdated);
  };

  const resetProducts = () => {
    setProducts(fakeMenu.LARGE);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,

    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,

    products,
    handleAdd,
    handleDelete,
    resetProducts,

    newProduct,
    setNewProduct,
  };

  // affiche
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};

  cursor: default;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    border-radius: ${theme.borderRadius.extraRound};
    height: 94vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
