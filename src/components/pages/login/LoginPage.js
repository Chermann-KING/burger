import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import { styled } from "styled-components";

export default function LoginPage() {
  // state

  // comportement

  // affiche
  return (
    <LoginPageStyled>
      <div className="filter"></div>
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  cursor: default;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  background-image: url("./images/burger-background.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .logo-login-page {
    transform: scale(2.5);
  }

  .filter {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
  }
`;
