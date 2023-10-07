import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...restProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.size.SM};
    margin-right: ${theme.gridUnit}px;
    color: ${theme.colors.greySemiDark};
    margin: 0 8px 0 10px;
  }
  .icon {
    display: flex;
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
  }
  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ version }) => extratStyle[version]}
`;

const extraNormalStyle = css`
  background: ${theme.colors.white};
  color: ${theme.colors.greySemiDark};
  padding: 18px 28px;

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`;
const extraMinimalistlStyle = css`
  background: ${theme.colors.background_gray};
  color: ${theme.colors.greyBlue};
  padding: 8px 16px;

  input {
    background: ${theme.colors.background_gray};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;

const extratStyle = {
  normal: extraNormalStyle,
  minimalist: extraMinimalistlStyle,
};
