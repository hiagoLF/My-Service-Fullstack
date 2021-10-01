import React, { useEffect, useState } from "react";

import { ModalCard } from "./styles";

import Modal from "../../../../components/Modal/";

import confirmationIcon from "../../../../assets/icons/check-green.svg";
import recusationIcon from "../../../../assets/icons/cancel-red.svg";
import { findServiceById } from "../../../../services/api/UserApi";
import { subscribeOnService } from "../../../../services/api/ServiceApi";

export type NewServiceModalProps = {
  onModalRequestClose: () => void;
  open: boolean;
};

const NewServiceModal: React.FC<NewServiceModalProps> = ({
  onModalRequestClose,
  open,
}) => {
  const [serviceName, setServiceName] = useState("");
  const [serviceCode, setServiceCode] = useState("");
  const [serviceAvailable, setServiceAvailable] = useState(false);

  const verifyServiceExistence = async () => {
    if (serviceCode === "") return;
    const service = await findServiceById(serviceCode);
    if (!service) {
      setServiceAvailable(false);
    } else {
      setServiceName(service.name);
      setServiceAvailable(true);
    }
  };

  const handleAddServiceButtonClick = async () => {
    const subscriptionResult = await subscribeOnService(serviceCode);
    if (!subscriptionResult) {
      alert("Não foi possível adicionar o serviço");
      return;
    }
    onModalRequestClose();
  };

  useEffect(() => {
    verifyServiceExistence();
  }, [serviceCode]);

  return (
    <Modal open={open} onModalRequestClose={onModalRequestClose}>
      <ModalCard>
        <h3 id="modal-title">Adicionar Serviço</h3>

        <div id="search-service-container">
          <h4>Digite o código do serviço</h4>
          <input
            type="text"
            placeholder="Código"
            onChange={(event) => setServiceCode(event.target.value)}
            value={serviceCode}
          />
          {serviceAvailable && (
            <div id="service-confirmation">
              <img src={confirmationIcon} alt="Confirmation" />
              <span>{serviceName}</span>
            </div>
          )}
          {!serviceAvailable && serviceCode !== "" && (
            <div id="service-recusation">
              <img src={recusationIcon} alt="Recusation" />
              <span>Não Encontrado</span>
            </div>
          )}
        </div>

        <button onClick={handleAddServiceButtonClick}>
          <span>Adicionar</span>
        </button>
      </ModalCard>
    </Modal>
  );
};

export default NewServiceModal;
