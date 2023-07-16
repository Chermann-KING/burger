import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";
import RightSide from "./RightSide";
import { theme } from "../../../theme/theme";
export default function Navbar({ username }) {
  // state

  // comportement

  // affiche
  return (
    <NavbarStyled className="navbar">
      <Logo />
      <RightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  padding: 0 ${theme.gridUnit * 2.5}px;

  .left-side {
    border: 1px solid white;
  }
`;
