import { Route, Routes } from "react-router";
import LoginPage from "../pages/authenticate/LoginPage";
import AdminLayout from "../layouts/AdminLayout";
import CustomerList from "../pages/admin/CustomerList";
import ProtectRoute from "./ProtectRoute";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="admin" element={<ProtectRoute element={<AdminLayout/>} allow={['ADMIN']}/>}>
          <Route index element={<CustomerList/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
