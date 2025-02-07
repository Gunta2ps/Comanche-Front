import { UserContextProvider } from "./contexts/UserContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <UserContextProvider>
        <AppRoutes />
      </UserContextProvider>
    </>
  );
}

export default App;
