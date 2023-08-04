import { styled } from "styled-components";
import { theme } from "../../theme/theme";
import PrimaryButton from "./PrimaryButton";
import { TiDelete } from "react-icons/ti";

export default function Card({
  id,
  imageSource,
  title,
  leftDescription,
  hasDeleteButton,
}) {
  return (
    <CardStyled key={id}>
      {hasDeleteButton && (
        <button className="delete-button" aria-label="delete-button">
          <TiDelete className="icon" />
        </button>
      )}
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>

      <div className="infos">
        <div className="title">
          <h2>{title}</h2>
        </div>

        <div className="description">
          <div className="left-description">
            <p>{leftDescription}</p>
          </div>

          <div className="right-description">
            <PrimaryButton label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  position: relative;

  display: grid;
  grid-template-rows: 65% 1fr;
  padding: ${theme.gridUnit * 2.5}px; //20px/
  padding-bottom: ${theme.gridUnit * 1.25}px; //10px/

  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.medium};

  .delete-button {
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    border: 1px solid red;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    padding: 0;
    border: none;
    background: none;

    .icon {
      height: 100%;
      width: 100%;
    }

    :hover {
      color: ${theme.colors.red};
    }
    :active {
      color: ${theme.colors.primary};
    }
  }

  .image {
    width: 100%;
    height: auto;
    margin-top: ${theme.gridUnit * 3.75}px;
    margin-bottom: ${theme.gridUnit * 2.5}px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .infos {
    display: grid;
    grid-template-rows: 30% 70%;
    row-gap: ${theme.gridUnit * 0.625}px; //5px/

    .title {
      width: 200px;
      margin: auto 0;

      h2 {
        width: 100%;
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};

        text-align: left;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        p {
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }
      }
      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        button {
          font-size: ${theme.fonts.size.XS};
          width: 95px;
          height: 38px;
          letter-spacing: normal;
        }
      }
    }
  }
`;
