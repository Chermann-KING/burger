import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import TextInput from "../../../../../reusable-ui/TextInput";

import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SuccessMessage from "./SuccessMessage";
import { getInputTextConfig } from "./getInputTextConfig";

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

  const inputTexts = getInputTextConfig(newProduct);

  // affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((inputText) => (
          <TextInput
            placeholder={inputText.placeholder}
            name={inputText.name}
            value={newProduct.title}
            Icon={inputText.Icon}
            onChange={handleChange}
            version={inputText.version}
          />
        ))}
      </div>
      <div className="submit-button">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmited && <SuccessMessage />}
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
  }
`;
