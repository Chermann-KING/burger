import { styled } from "styled-components";
import { theme } from "../../../../theme/theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  border: 5px solid green;

  background: ${theme.colors.background_white};
  flex: 1;
  height: calc(95vh - 10vh);

  display: grid;
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .basket {
    border: 5px solid red;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    .admin {
      background: red;

      height: 250px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;
