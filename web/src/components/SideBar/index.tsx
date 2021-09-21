import React from "react";
import { useSideBar } from "../../contexts/SideBarContext";
import { useHistory } from "react-router-dom";

import {
  SideBarContainer,
  UserProfileContainer,
  NavigatorsContainer,
} from "./styles";

import pointIcon from "../../assets/icons/point.svg";
import adminIcon from "../../assets/icons/admin.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import peopleIcon from "../../assets/icons/people.svg";
import { useUserProfile } from "../../contexts/UserContext";

const SideBar: React.FC = () => {
  const history = useHistory();
  const { sideBarInformations, setSideBarInformations } = useSideBar();
  const { user } = useUserProfile();

  const handleSideBarLinkButtonClick = (navigateTo: string) => {
    setSideBarInformations({ ...sideBarInformations, open: false });
    setTimeout(() => {
      history.push(navigateTo);
    }, 300);
  };

  return (
    <SideBarContainer>
      <UserProfileContainer>
        <img src={user?.imageUrl} alt={user?.name} />
        <h2>{user?.name}</h2>
        <h3>{user?.email}</h3>
      </UserProfileContainer>
      <NavigatorsContainer>
        <button onClick={() => handleSideBarLinkButtonClick("/")}>
          <img src={pointIcon} alt="Serviços" />
          <span>Serviços</span>
        </button>

        <button
          onClick={() => handleSideBarLinkButtonClick("/235164634345/admin")}
        >
          <img src={adminIcon} alt="Administração" />
          <span>Administração</span>
        </button>

        <button
          onClick={() =>
            handleSideBarLinkButtonClick("/235164634345/customers")
          }
        >
          <img src={peopleIcon} alt="Cliêntes" />
          <span>Clientes</span>
        </button>

        <button
          onClick={() => handleSideBarLinkButtonClick("/235164634345/config")}
        >
          <img src={settingsIcon} alt="Configurações" />
          <span>Configurações</span>
        </button>

        <button onClick={() => alert("Logout...")}>
          <img src={logoutIcon} alt="Serviços" />
          <span>Sair</span>
        </button>
      </NavigatorsContainer>
    </SideBarContainer>
  );
};

export default SideBar;
