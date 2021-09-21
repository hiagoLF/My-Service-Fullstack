import { GoogleLoginResponse } from "react-google-login";
import api from "../../services/api";

export default function useGoogleLogin() {

  const handleGoogleLoginSuccess = async (googleData: GoogleLoginResponse) => {
    const loginResult = await api.post("/login", { token: googleData.tokenId });

    if (!loginResult.data) {
      alert("Não Foi possível obter os dados do usuário");
      return;
    }

    localStorage.setItem("authToken", loginResult.data.authToken);

    console.log("Token de Login Armazenado >>>> ", loginResult.data.authToken);

    // We use window location to restart aplication state
    window.location.href = '/'
  };

  const handleGoogleLoginFailed = () => {
    alert("Não foi possível fazer login");
  };

  return { handleGoogleLoginSuccess, handleGoogleLoginFailed };
}
