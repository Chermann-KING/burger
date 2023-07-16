import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function OrderPage() {
  // state
  const { username } = useParams();

  // comportement

  // affiche
  return (
    <OrderPageStyled>
      <div className="container">
        <nav className="navbar">
          Navbar
          <h1>Bonjour {username} !</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </nav>
        <main>Main</main>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
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

    nav {
      background: blue;
      height: 10vh;
      display: flex;
      justify-content: space-between;
    }
    main {
      background: green;
      flex: 1;
    }
  }
`;
