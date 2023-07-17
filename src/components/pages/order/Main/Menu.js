import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  // state
  const [products, setProducts] = useState(fakeMenu2);
  // comportement
  // affiche
  return (
    <MenuStyled>
      {products.map((product) => {
        return (
          <div key={product.id} className="produit">
            {product.title}
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  border: 5px solid blue;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;

  .produit {
    background: red;
    width: 240px;
    height: 330px;
  }
`;
