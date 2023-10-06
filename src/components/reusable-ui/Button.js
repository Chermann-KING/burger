import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

export default function Button({ label, Icon, className, version = "normal" }) {
  return (
    <ButtonStyled className={className} version={version}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${(props) => {
    if (props.version === "normal") return extraPrimaryStyle;
    if (props.version === "success") return extraSuccessStyle;
  }}
`;

const extraPrimaryStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: ${theme.gridUnit * 2.25}px ${theme.gridUnit * 3}px;
  border-radius: ${theme.borderRadius.round};
  width: 100%;
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.semiBold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.background_primary_button};
  border: 1px solid ${theme.colors.background_primary_button};

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: white;
    color: ${theme.colors.background_primary_button};
    border: 1px solid ${theme.colors.background_primary_button};
    transition: all 200ms ease-out;
  }
  &:active {
    color: white;
    background-color: ${theme.colors.background_primary_button};
    border: 1px solid ${theme.colors.background_primary_button};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const extraSuccessStyle = css`
  cursor: pointer;
  height: 35px;
  font-weight: ${theme.fonts.weights.semiBold};
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  padding: 0 1.5em;
  transition: all 200ms ease-out;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  &:active {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;
