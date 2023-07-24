import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Product from "./Product";

export default function Menu() {
  // state
  // eslint-disable-next-line
  const [products, setProducts] = useState(fakeMenu2);
  // comportement
  // affiche
  return (
    <MenuStyled>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            imageSource={product.imageSource}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;
`;
