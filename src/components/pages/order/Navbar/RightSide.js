import { styled } from "styled-components";
import { theme } from "../../../../theme/theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function RightSide({ username }) {
  // state
  const [isModeAdmin, setisModeAdmin] = useState(false);

  // comportement
  const displayToastNofication = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setisModeAdmin(!isModeAdmin);
  };

  // affiche
  return (
    <RightSideStyled>
      <ToggleButton
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
        onToggle={displayToastNofication}
      />
      <Profile username={username} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: ${theme.gridUnit * 6.25}px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
