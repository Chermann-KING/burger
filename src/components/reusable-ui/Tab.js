import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export default function Tab({ Icon, label, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon}</div>
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  cursor: pointer;
  height: 43px;
  position: relative;
  top: 1px;
  left: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};

  padding: 0 ${theme.gridUnit * 2.75}px; //0px 22px

  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  box-shadow: ${theme.shadows.subtle};

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  .icon {
    display: flex;
  }
  .label {
    margin-left: ${theme.gridUnit * 1.625}px; //13px
  }
`;
