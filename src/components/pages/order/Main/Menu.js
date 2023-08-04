import { useContext } from "react";
import { styled } from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  // state
  const { products, isModeAdmin } = useContext(OrderContext);

  // comportement

  // affiche
  return (
    <MenuStyled>
      {products.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            title={title}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  overflow-y: scroll;

  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;
`;
