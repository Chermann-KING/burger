import { styled } from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  /* background: red; */

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
