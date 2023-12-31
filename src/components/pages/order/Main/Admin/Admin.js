import { styled } from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "../Admin/AdminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
