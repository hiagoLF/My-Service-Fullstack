import { Redirect, Route } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import { useUserProfile } from "../contexts/UserContext";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { authenticationStatus } = useUserProfile();
  
  return (
    <Route
      {...rest}
      render={
        (props) => {
          // return <LoadingPage />
          if (authenticationStatus === "loading") return <LoadingPage />;
          if (authenticationStatus === "authenticated") {
            return <Component {...props} />;
          }
          if (authenticationStatus === "unauthenticated") {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }
        }

        // isAuthenticated ? (
        //   <Component {...props} />
        // ) : (
        //   <Redirect
        //     to={{ pathname: "/login", state: { from: props.location } }}
        //   />
        // )
      }
    />
  );
};

export default PrivateRoute;
