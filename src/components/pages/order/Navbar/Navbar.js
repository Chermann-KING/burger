import { styled } from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import RightSide from "./RightSide";
import { refrashPage } from "../../../../utils/window";
import { theme } from "../../../../theme/theme";
export default function Navbar({ username }) {
  // state

  // comportement

  // affiche
  return (
    <NavbarStyled className="navbar">
      <Logo className={"logo-navbar"} onClick={() => refrashPage()} />
      <RightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;

  padding: 0 ${theme.gridUnit * 2.5}px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-navbar {
    :hover {
      cursor: pointer;
    }
  }
`;
