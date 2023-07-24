import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../theme/theme";

export default function Profile({ username }) {
  return (
    <ProfileStyle>
      <div className="infos">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to="/">
          <div className="deconnexion">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>

      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyle>
  );
}

const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .infos {
    text-align: right;
    margin-right: ${theme.gridUnit * 1.25}px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .deconnexion {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: ${theme.gridUnit * 0.25}px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
