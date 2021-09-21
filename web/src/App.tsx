import { UserProvider } from "./contexts/UserContext";

import Routes from "./config/Routes";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
