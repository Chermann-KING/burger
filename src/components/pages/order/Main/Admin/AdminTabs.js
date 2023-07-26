import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";

export default function AdminTabs({ Icon }) {
  return (
    <AdminTabsStyled>
      <Tab Icon={<FiChevronDown />} />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div``;
