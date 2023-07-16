import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";

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
  background: orange;

  cursor: default;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
