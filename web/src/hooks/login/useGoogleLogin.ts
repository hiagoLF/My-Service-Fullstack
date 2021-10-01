import { GoogleLoginResponse } from "react-google-login";
import { loginUser } from "../../services/api/UserApi";

export default function useGoogleLogin() {
  const handleGoogleLoginSuccess = async (googleData: GoogleLoginResponse) => {
    const loginResult = await loginUser(googleData.tokenId);

    localStorage.setItem("authToken", loginResult.authToken);

    console.log("Token de Login Armazenado >>>> ", loginResult.authToken);

    // We use window location to restart aplication state
    window.location.href = "/";
  };

  const handleGoogleLoginFailed = () => {
    alert("Não foi possível fazer login");
  };

  return { handleGoogleLoginSuccess, handleGoogleLoginFailed };
}
