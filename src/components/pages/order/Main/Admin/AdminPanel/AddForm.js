import { styled } from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  // state
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmited, setIsSubmited] = useState(false);

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
    setNewProduct(EMPTY_PRODUCT);

    displaySuccesMessage();
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

  const displaySuccesMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  // affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
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
          placeholder="Nom du produit (ex: Super Burger)"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Lien URL d'une image (ex: https://la—photo—de—mon-produit.png)"
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
        {isSubmited && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  /* border: 5px solid black; */

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
    /* background: green; */

    grid-area: 1/2 / 4/3;
    display: grid;
  }

  .submit-button {
    /* background: blue; */

    grid-area: 5/2 / 4/-1;
    display: flex;
    align-items: center;

    button {
      cursor: pointer;
      width: 50%;
      padding: 0.5rem 1.5rem;
      border-radius: 0.3rem;
    }
  }
`;
