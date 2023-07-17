import { styled } from "styled-components";
import { theme } from "../../../theme/theme";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div className="menu">Menu</div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background: ${theme.colors.background_white};
  flex: 1;

  display: grid;
  grid-template-columns: 25% 1fr;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .basket {
    border: 5px solid red;
  }
  .menu {
    border: 5px solid blue;
  }
`;
