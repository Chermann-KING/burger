import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { theme } from "../../../../../theme/theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { tabsConfig } from "./tabsConfig";

export default function AdminTabs() {
  // state
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  // comportement
  const selectTab = (tabSelected) => {
    setIsCollapsed(false); //Ouverture du panel dans tous les cas
    setCurrentTabSelected(tabSelected); // Réactulisation du tab sélectionné
  };

  const tabs = tabsConfig;

  // Affichage
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
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
