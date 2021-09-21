import React from "react";

import { LoadingPageContainer } from './styles';

const LoadingPage: React.FC = () => {
  return (
    <LoadingPageContainer>
      <div id="loading">Carregando...</div>
    </LoadingPageContainer>
  );
};

export default LoadingPage;
