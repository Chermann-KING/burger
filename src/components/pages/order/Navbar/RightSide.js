import { styled } from "styled-components";
import { theme } from "../../../../theme/theme";
import Profile from "./Profile";

export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <Profile username={username} />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: ${theme.gridUnit * 6.25}px;

  /* .admin-button {
    background: lightblue;
  } */
`;
