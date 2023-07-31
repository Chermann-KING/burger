import { styled } from "styled-components";

export default function AddForm() {
  return <AddFormStyled>
    <div className="image-preview"><img src="" alt="image preview" /></div>
    <div className="input-fields"><input type="text" placeholder="Nom"/><input type="text" placeholder="Image URL"/><input type="text" placeholder="Prix"/></div>
    <div className="submit-button"><button>Submit</button></div>
  </AddFormStyled>;
}

const AddFormStyled = styled.form`
  border: 5px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4,1fr);
  width: 70%;
  height: 100%;

  .image-preview{
    background: red;
    grid-area: 1/1 / 4/2;
  }
  
  .input-fields{
    background: green;
    grid-area: 1/2 / 4/3;
    display: grid;
  }
  
  .submit-button{
    background: blue;
    grid-area: 5/2 / 4/-1;
  }
`;
