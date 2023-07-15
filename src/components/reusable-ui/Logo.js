import { styled } from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>
        <span>Crazee</span>
        <img src="./images/logo-orange.png" alt="picto burger" />
        <span>Burger</span>
      </h1>
    </LogoStyled>
  );
}
const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);
  h1 {
    line-height: 1.6;
  }
  h1 > span {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 36px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", Cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: -17px;
  }
`;
