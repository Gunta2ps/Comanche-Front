import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


function AdminLayout() {
  return (
    <div className="w-screen h-screen flex">
        <Sidebar/>
        <div className="flex flex-col w-full">
            <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout