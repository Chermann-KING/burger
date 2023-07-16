import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
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
  font-size: ${theme.fonts.size.P0};
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
`;
