import { Route, Routes } from "react-router";
import Login from "../pages/authenticate/Login";
import AdminLayout from "../layouts/AdminLayout";
import CustomerList from "../pages/admin/CustomerList";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
        </Route>
        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<CustomerList/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
