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
            <div className="info-text">
              <div className="image">
                <img src={product.imageSource} alt={product.title} />
              </div>

              <div className="description">
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <button>Ajouter</button>
              </div>
            </div>
          </div>
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

  .produit {
    background: red;
    width: 240px;
    height: 330px;

    .image {
      border: 1px solid fuchsia;
      width: 100px;
      height: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .description {
      border: 1px solid fuchsia;
    }
  }
`;
