import { styled } from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  // state
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const { handleAdd } = useContext(OrderContext);

  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    // const id = crypto.randomUUID(); //natif JS pour générer des ID
    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    };
    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
    // const newValue = event.target.value;
    // const name = event.target.name;
    // setNewProduct({
    //   ...newProduct,
    //   [name]: newValue,
    // });
  };

  // affichage
  return (
    <AddFormStyled onClick={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <p>Aucune image</p>
        )}
      </div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Nom"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Prix"
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
        />
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
    grid-area: 1/1 / 4/2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
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
