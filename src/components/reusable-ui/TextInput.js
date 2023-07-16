import { BsPersonCircle } from "react-icons/bs";
import { styled } from "styled-components";

export default function TextInput({ value, onChange, ...restProps }) {
  return (
    <TextInputStyled>
      <BsPersonCircle className="icon" />
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
  }
  input {
    border: none;
    font-size: 15px;
    color: #17161a;
    width: 100%;
    transition: all 0.35s ease-in-out;
  }
  &::placeholder {
    background: white;
    color: lightgrey;
  }
`;
