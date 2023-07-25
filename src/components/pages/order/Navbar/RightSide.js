import { styled } from "styled-components";
import { theme } from "../../../../theme/theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";

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
      <ToastAdmin />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: ${theme.gridUnit * 6.25}px;
`;
