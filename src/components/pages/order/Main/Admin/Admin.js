import { styled } from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from "react";

export default function Admin() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);

  return (
    <AdminStyled>
      <AdminTabs
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isAddSelected={isAddSelected}
        setIsAddSelected={setIsAddSelected}
        isEditSelected={isEditSelected}
        setIsEditSelected={setIsEditSelected}
      />
      {!isCollapsed && (
        <AdminPanel
          isAddSelected={isAddSelected}
          setIsAddSelected={setIsAddSelected}
          isEditSelected={isEditSelected}
          setIsEditSelected={setIsEditSelected}
        />
      )}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
