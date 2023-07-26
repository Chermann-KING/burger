import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme/theme";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`order/${inputValue}`);
    setInputValue("");
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // affiche
  return (
    <LoginFormStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Entrez votre prénom"}
          required
        />

        <PrimaryButton
          label={"Acceder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
        />
      </form>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  z-index: 1;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: ${theme.gridUnit * 0.313}rem ${theme.gridUnit * 0.25}rem;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  hr {
    margin-bottom: ${theme.gridUnit * 5}px;
    border: 1.5px solid ${theme.colors.horizontalLineLogin};
  }

  h2 {
    color: ${theme.colors.white};
    margin: ${theme.gridUnit * 2.5}px ${theme.gridUnit * 1.25}px
      ${theme.gridUnit * 1.25}px;
    font-size: ${theme.fonts.size.P4};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: ${theme.gridUnit * 1.25}px;
  }
`;
