import React from "react";

import { PageBodyContainer, AddServiceButton, ServiceCard } from "./styles";

import addIcon from "../../../../assets/icons/add.svg";
import { useHistory } from "react-router-dom";
import { ServiceType } from "../../../../@types/Service";

type PageBodyProps = {
  onAddServiceButtonClick: () => void;
  services?: ServiceType[];
};

const PageBody: React.FC<PageBodyProps> = ({
  onAddServiceButtonClick,
  services,
}) => {
  const history = useHistory();

  return (
    <PageBodyContainer>
      <AddServiceButton onClick={onAddServiceButtonClick}>
        <img src={addIcon} alt="Add Service" />
      </AddServiceButton>

      {services?.map((service, index) => (
        <ServiceCard key={index}>
          <img
            onClick={() => history.push(`/${service.id}/schedule`)}
            src={service.imageUrl}
            alt={service.serviceName}
          />
        </ServiceCard>
      ))}
    </PageBodyContainer>
  );
};

export default PageBody;
