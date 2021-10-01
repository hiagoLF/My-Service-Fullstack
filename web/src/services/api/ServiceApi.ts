import findUserAuthenticationToken from "../token/findUserAuthenticationToken";
import api from "./";

export async function subscribeOnService(serviceId: string) {
  try {
    const token = findUserAuthenticationToken();
    api.defaults.headers.authorization = `Bearer ${token}`;
    const subscriptionResult = await api.put(`/office/subscribe/${serviceId}`);
    return subscriptionResult?.data;
  } catch (err) {
    return undefined;
  }
}

export async function findUserServices() {
  try {
    const token = findUserAuthenticationToken();
    api.defaults.headers.authorization = `Bearer ${token}`;
    const servicesResult = await api.get("/office");
    return servicesResult?.data;
  } catch (err) {
    return undefined;
  }
}
