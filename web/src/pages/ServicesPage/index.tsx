import React, { useState } from "react";

import { ServicesPageContainer } from "./styles";

import PageHeader from "./components/PageHeader/";
import PageBody from "./components/PageBody/";
import NewServiceModal from "./components/NewServiceModal/";
import { useUserProfile } from "../../contexts/UserContext";

const ServicesPage: React.FC = () => {
  const [newServiceModalOpen, setNewServicemodalOpen] =
    useState<boolean>(false);
  const { user, refreshUserProfile } = useUserProfile();

  const handleModalRequestClose = () => {
    setNewServicemodalOpen(false);
    refreshUserProfile();
  };

  return (
    <ServicesPageContainer>
      <PageHeader />
      <PageBody
        onAddServiceButtonClick={() => setNewServicemodalOpen(true)}
        services={user?.offices}
      />
      <NewServiceModal
        onModalRequestClose={handleModalRequestClose}
        open={newServiceModalOpen}
      />
    </ServicesPageContainer>
  );
};

export default ServicesPage;
