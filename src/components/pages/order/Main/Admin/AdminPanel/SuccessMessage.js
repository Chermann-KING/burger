import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";
import { FiCheck } from "react-icons/fi";

export default function SuccessMessage() {
  return (
    <SuccessMessageStyled>
      <FiCheck className="icon" />
      <span className="message">Ajouté avec succès !</span>
    </SuccessMessageStyled>
  );
}

const SuccessMessageStyled = styled.div`
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
`;
