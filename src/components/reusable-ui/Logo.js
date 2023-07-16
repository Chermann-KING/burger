import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>
        <span>Crazee</span>
        <img src="/images/logo-orange.png" alt="picto burger" />
        <span>Burger</span>
      </h1>
    </LogoStyled>
  );
}
const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    line-height: 1.6;
  }
  h1 > span {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", Cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin-left: ${theme.gridUnit * 0.6}px;
    margin-right: ${theme.gridUnit * 0.6}px;
    margin-bottom: ${theme.gridUnit * -2.13}px;
  }
`;
