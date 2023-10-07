import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

export const getInputTextConfig = (newProduct) => [
  {
    id: "0",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    name: "title",
    value: newProduct.title,
    Icon: <FaHamburger />,
    version: "minimalist",
  },
  {
    id: "2",
    type: "text",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    name: "imageSource",
    value: newProduct.imageSource,
    Icon: <BsFillCameraFill />,
    version: "minimalist",
  },
  {
    id: "3",
    type: "text",
    placeholder: "Prix",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    Icon: <MdOutlineEuro />,
    version: "minimalist",
  },
];
