import { styled } from "styled-components";
import { theme } from "../../../../theme/theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <ToggleButton
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
      />
      <Profile username={username} />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: ${theme.gridUnit * 6.25}px;
`;
