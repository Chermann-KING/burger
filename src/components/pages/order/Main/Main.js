import { styled } from "styled-components";
import { theme } from "../../../../theme/theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  // eslint-disable-next-line
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  /* border: 5px solid green; */

  background: ${theme.colors.background_white};
  flex: 1;
  height: calc(95vh - 10vh);

  display: grid;
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  .basket {
    border: 5px solid red;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
