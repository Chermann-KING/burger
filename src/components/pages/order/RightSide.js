import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <div className="right-side">
        <h1>Hey, {username}!</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  border: 1px solid white;
`;
