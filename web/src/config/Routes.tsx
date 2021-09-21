import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SideBarProvider } from "../contexts/SideBarContext";
import AdminPage from "../pages/AdminPage";
import ConfigPage from "../pages/ConfigPage";
import CustomersPage from "../pages/CustomersPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SchedulePage from "../pages/SchedulePage";
import ServicesPage from "../pages/ServicesPage";
import PrivateRoute from "./PrivateRoutes";

function Routes() {
  return (
    <BrowserRouter>
      <SideBarProvider>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <PrivateRoute path="/" exact component={ServicesPage} />
          <PrivateRoute
            path="/:serviceId/schedule"
            exact
            component={SchedulePage}
          />
          <PrivateRoute path="/:serviceId/admin" exact component={AdminPage} />
          <PrivateRoute
            path="/:serviceId/config"
            exact
            component={ConfigPage}
          />
          <PrivateRoute
            path="/:serviceId/customers"
            exact
            component={CustomersPage}
          />
          <PrivateRoute path="/register" exact component={RegisterPage} />
        </Switch>
      </SideBarProvider>
    </BrowserRouter>
  );
}

export default Routes;
