/* eslint-disable react/prop-types */
import { CircleUserRound, EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import EditCustomer from "./EditCustomer";
import { deleteUserFunction } from "../api/api";
import useUser from "../hooks/useUser";
function Table({ user ,onOpen }) {
  const [showMenu, setShowMenu] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [userid, setUserId] = useState(null);
   const {getUsersList} = useUser();
    const token = localStorage.getItem('token')

  const handleClick = (id) => {
    setShowMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleEdit = (id) =>{
    setShowMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
    console.log(id)
    setUserId(id)
    setShowModal(true)
  }

     const handleDelete = async (id) => {
        try {
          console.log(id)
          await deleteUserFunction(id,token)
          await getUsersList()
        } catch (error) {
          console.log(error.message)
        }
      }

  return (
    <div className=" h-full scrollbar-hidden flex justify-center">
      <table className="table-auto w-9/10 mb-4 border-separate border-spacing-y-4">
        <thead className="bg-transparent">
          <tr>
            <th className="px-4 py-2 text-blue-400">Name</th>
            <th className="px-4 py-2 text-blue-400"></th>
            <th className="px-4 py-2 text-blue-400">Address</th>
            <th className="px-4 py-2 text-blue-400">Email</th>
            <th className="px-4 py-2 text-blue-400">Phone</th>
            <th className="px-4 py-2 text-blue-400">Birth Date</th>
            <th className="px-4 py-2 text-blue-400"></th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          {user && user.map((item) => (
            <tr className="my-4" key={item.id}>
              <td className="px-4 py-2 text-center rounded-l-xl">
                <div className="flex justify-center items-center">
                  <CircleUserRound size={40} strokeWidth={1}/>
                </div>
              </td>
              <td className="px-4 py-2 text-center">{item.name}</td>
              <td className="px-4 py-2 text-center">{item.address}</td>
              <td className="px-4 py-2 text-center">{item.email}</td>
              <td className="px-4 py-2 text-center">{item.phone}</td>
              <td className="px-4 py-2 text-center">
                {new Date(item.birthDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </td>
              <td className=" rounded-r-xl">
                <div className="relative">
                  <button
                    onClick={() => handleClick(item.id)}
                    className="py-2 text-blue-400 cursor-pointer"
                  >
                    <EllipsisVertical />
                  </button>
                  {showMenu[item.id] && (
                    <div className="absolute -right-8 top-6  w-36 bg-white border border-gray-200 shadow-lg rounded-lg z-20">
                      <ul className="py-2 flex flex-col gap-2">
                        <li className="mx-4 py-2 pl-3 bg-amber-200 text-amber-700 rounded-lg cursor-pointer flex" onClick={()=>handleEdit(item.id)}>
                          <Pencil />
                          Edit
                        </li>

                        <li className="mx-4 py-2 pl-3 bg-red-200 text-red-700 rounded-lg cursor-pointer flex" onClick={()=>handleDelete(item.id)}>
                          <Trash2 />
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <EditCustomer setShowModal={setShowModal}
            userid = {userid}/>}
    </div>
  );
}

export default Table;
