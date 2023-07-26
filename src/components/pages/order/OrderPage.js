import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { theme } from "../../../theme/theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(true);

  // comportement

  const orderContextValue = { isModeAdmin, setIsModeAdmin };

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
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
