import React from "react";
import { GoogleLogin } from "react-google-login";

// import LoginForm from "../LoginForm";

import { LoginCardContainer } from "./styles";
import useGoogleLogin from "../../../../hooks/login/useGoogleLogin";

const LoginCard: React.FC = () => {
  const { handleGoogleLoginFailed, handleGoogleLoginSuccess } =
    useGoogleLogin();

  return (
    <LoginCardContainer>
      <div id="login-card-header">Login</div>

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || ""}
        buttonText="Login com o Google"
        onSuccess={handleGoogleLoginSuccess as any}
        onFailure={handleGoogleLoginFailed}
        cookiePolicy={"single_host_origin"}
      />
      {/* <LoginForm /> */}

      <div id="google-login-description">
        Caso não possua uma conta, seu perfil será registrado assim que fazer
        login com o Google
      </div>
    </LoginCardContainer>
  );
};

export default LoginCard;
