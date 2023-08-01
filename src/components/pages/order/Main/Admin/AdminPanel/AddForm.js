import { styled } from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";

export default function AddForm() {
  // state
  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  const { handleAdd } = useContext(OrderContext);

  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: new Date().getTime(),
      title: title,
      imageSource: imageSource,
      price: price,
    };
    handleAdd(newProduct);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageSource(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  // affichage
  return (
    <AddFormStyled onClick={handleSubmit}>
      <div className="image-preview">
        <img src="" alt="preview" />
      </div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Nom"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageSource}
          onChange={handleImageChange}
        />
        <input
          type="text"
          placeholder="Prix"
          value={price ? price : ""}
          onChange={handlePriceChange}
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
