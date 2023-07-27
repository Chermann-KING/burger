import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme/theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  // state
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  // comportement
  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    if (tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }

    if (tabSelected === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
    }
  };

  const tabsConfig = [
    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isAddSelected ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    },
  ];

  // Affichage
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabsConfig.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            onClick={tab.onClick}
            className={tab.className}
          />
        );
      })}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 ${theme.gridUnit * 2.5}px; //0px 20px

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-right: 1px;
  }
`;
