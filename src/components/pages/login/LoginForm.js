import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  h1 {
    color: white;
    font-size: 48px;
  }

  hr {
    margin-bottom: 40px;
    border: 1.5px solid #f56a2c;
  }

  h2 {
    color: white;
    margin: 20px 10px 10px;
    font-size: 36px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`;
