import findUserAuthenticationToken from "../token/findUserAuthenticationToken";
import api from "./";

export async function getUserInformations(token: string) {
  try {
    const token = findUserAuthenticationToken();
    api.defaults.headers.authorization = `Bearer ${token}`;
    const userResponse = await api.get("user/me");
    return userResponse.data;
  } catch (err) {
    return undefined;
  }
}

export async function loginUser(googletoken: string) {
  try {
    const loginResult = await api.post("/user/login", { token: googletoken });
    return loginResult.data;
  } catch (err) {
    return undefined;
  }
}

export async function findServiceById(serviceId: string) {
  try {
    const serviceResult = await api.get(`/office/${serviceId}`);
    return serviceResult.data;
  } catch (err) {
    return undefined;
  }
}
