import { createContext, useContext, useEffect, useState } from "react";
import { ServiceType } from "../@types/Service";
import { getUserInformations } from "../services/api/UserApi";

type UserDataType =
  | {
      name?: string;
      email?: string;
      imageUrl?: string;
      authToken?: string;
      offices?: ServiceType[];
    }
  | undefined;

type AuthenticationStatusType = "loading" | "authenticated" | "unauthenticated";

type UserContextProps = {
  user: UserDataType | undefined;
  setUser: (user: UserDataType) => void;
  authenticationStatus: AuthenticationStatusType;
  setAuthenticationStatus: (status: AuthenticationStatusType) => void;
  refreshUserProfile: () => void;
};

const UserContext = createContext<UserContextProps>({
  user: {},
  setUser: (informations) => console.warn("No user provided"),
  authenticationStatus: "loading",
  setAuthenticationStatus: (status) => console.warn("No status provided"),
  refreshUserProfile: () => console.warn("User no found"),
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserDataType>(undefined);
  const [authenticationStatus, setAuthenticationStatus] =
    useState<AuthenticationStatusType>("loading");

  async function findUserInformations() {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      setAuthenticationStatus("unauthenticated");
      return;
    }
    const userResponse = await getUserInformations(authToken);
    if (!userResponse) {
      setAuthenticationStatus("unauthenticated");
      return;
    }
    setUser(userResponse);
    setAuthenticationStatus("authenticated");
  }

  useEffect(() => {
    findUserInformations();
    return;
  }, []);
  
  const refreshUserProfile = () => {
    findUserInformations();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        authenticationStatus,
        setAuthenticationStatus,
        refreshUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserContext);
