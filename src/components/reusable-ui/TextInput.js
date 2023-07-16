import { BsPersonCircle } from "react-icons/bs";
import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export default function TextInput({ value, onChange, ...restProps }) {
  return (
    <TextInputStyled>
      <BsPersonCircle className="icon" />
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: ${theme.gridUnit * 2.25}px ${theme.gridUnit * 3}px;
  margin: ${theme.gridUnit * 2.25}px 0;

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: ${theme.gridUnit}px;
    color: ${theme.colors.greySemiDark};
  }
  input {
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;
    transition: all 0.35s ease-in-out;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
