export default function findUserAuthenticationToken(): string | undefined {
  const token = localStorage.getItem("authToken");
  if (!token) {
    alert("Token Inexistente");
    return;
  }
  return token;
}
