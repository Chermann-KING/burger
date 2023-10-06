import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStylde>
      <p className="title">Victime de notre succès ! 😄</p>
      <p className="description">
        De nouvelles recettes sont en cours de préparattion.
      </p>
      <p className="description">À très vite !</p>
    </EmptyMenuClientStylde>
  );
}

const EmptyMenuClientStylde = styled.div`
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }
`;
