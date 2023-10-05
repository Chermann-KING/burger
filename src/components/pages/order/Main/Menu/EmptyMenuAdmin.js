import styled from "styled-components";

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <span>Pas de produit</span>
      <button onClick={onReset}>Générer nouveaux produits</button>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div``;
