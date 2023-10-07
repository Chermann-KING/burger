import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="empty-image">
          <p>Aucune image</p>
        </div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: 1/1 / 4/2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  p {
    color: ${theme.colors.greySemiDark};
    line-height: 1.5;
  }
`;
