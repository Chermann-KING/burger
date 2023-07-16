import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import { theme } from "../../../theme/theme";

export default function OrderPage() {
  // state
  const { username } = useParams();

  // comportement

  // affiche
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
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
