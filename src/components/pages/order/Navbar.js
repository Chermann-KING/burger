import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Navbar({ username }) {
  // state

  // comportement

  // affiche
  return (
    <NavbarStyled className="navbar">
      Navbar
      <h1>Bonjour {username}!</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;
