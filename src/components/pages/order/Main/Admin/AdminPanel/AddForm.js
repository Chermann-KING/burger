import { styled } from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

export default function AddForm() {
  // state
  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource: "/images/ice-cream.png",
    price: 2.5,
  };

  const { handleAdd } = useContext(OrderContext);

  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(newProduct);
  };

  // affichage
  return (
    <AddFormStyled onClick={handleSubmit}>
      <div className="image-preview">
        <img src="" alt="preview" />
      </div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
      </div>
      <div className="submit-button">
        <button>Ajouter</button>
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 5px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 70%;
  height: 100%;

  .image-preview {
    background: red;
    grid-area: 1/1 / 4/2;
  }

  .input-fields {
    background: green;
    grid-area: 1/2 / 4/3;
    display: grid;
  }

  .submit-button {
    background: blue;
    grid-area: 5/2 / 4/-1;
  }
`;
