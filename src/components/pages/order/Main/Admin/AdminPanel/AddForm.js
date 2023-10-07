import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme/theme";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  // state
  const [isSubmited, setIsSubmited] = useState(false);

  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

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
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        <TextInput
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />
        <TextInput
          type="text"
          placeholder="Prix"
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
      </div>
      <div className="submit-button">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmited && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span className="message">Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 70%;
  height: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1/2 / 4/3;
    display: grid;
    grid-gap: 8px;
  }

  .submit-button {
    grid-area: 5/2 / 4/-1;
    display: flex;
    align-items: center;

    button {
      cursor: pointer;
      width: 50%;
      padding: 0.5rem 1.5rem;
      border-radius: 0.3rem;
    }

    .submit-message {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-left: 15px;

      .icon {
        width: 1.2em;
        height: 1.2em;
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.circle};
      }
      .message {
        color: ${theme.colors.success};
        font-size: ${theme.fonts.size.SM};
      }
    }
  }
`;
