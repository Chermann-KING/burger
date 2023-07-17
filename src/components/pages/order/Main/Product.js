import { styled } from "styled-components";

export default function Product({ id, imageSource, title, price }) {
  return (
    <ProductStyled key={id}>
      <div className="info-text">
        <div className="image">
          <img src={imageSource} alt={title} />
        </div>

        <div className="description">
          <h2>{title}</h2>
          <h3>{price}</h3>
          <button>Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
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
`;
