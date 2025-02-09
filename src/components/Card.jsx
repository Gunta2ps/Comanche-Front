/* eslint-disable react/prop-types */
import { CircleUserRound, EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import EditCustomer from "./EditCustomer";
import { deleteUserFunction } from "../api/api";
import useUser from "../hooks/useUser";

function Card({ user}) {

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
    <div className="m-4 flex flex-wrap gap-10">
      {user && user.map((item) => (
        <div className="bg-white w-100 h-48 rounded-xl flex" key={item.id}>
          <div className="w-1/3 p-2 flex justify-center items-center"><CircleUserRound size={100} strokeWidth={1} /></div>
          <div className="w-2/3 p-2">
            <div  className="relative flex justify-end h-1/20">
              <button onClick={()=>handleClick(item.id)}   className="text-blue-400 p-2 cursor-pointer">
              <EllipsisVertical />
              </button>
              {showMenu[item.id] && (
                <div className="absolute top-full -right-9 mt-6 w-36 bg-white border border-gray-200 shadow-lg rounded-lg z-20">
                  <ul className="py-2 flex flex-col gap-2">
                  <li className="mx-4 py-2 pl-3 bg-amber-200 text-amber-700 rounded-lg cursor-pointer flex" onClick={()=>handleEdit(item.id)}>
                    <Pencil/>Edit
                  </li>
                  
                  <li className="mx-4 py-2 pl-3 bg-red-200 text-red-700 rounded-lg cursor-pointer flex" onClick={()=>handleDelete(item.id)}>
                    <Trash2/>Delete
                  </li>
                </ul>
                </div>
              )}
            </div>            
            <div className="h-19/20 text-sm font-bold">
              <div>
                <div className="text-blue-400">Name</div>
                <div>{item.name}</div>
              </div>
              <div>
                <div className="text-blue-400">Address</div>
                <div>{item.address}</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-blue-400">E-mail</div>
                  <div>{item.email}</div>
                </div>
                <div className="pr-20">
                  <div className="text-blue-400">Phone</div>
                  <div>{item.phone}</div>
                </div>
              </div>
              <div>
                <div className="text-blue-400">Birth Date</div>
                <div>{new Date(item.birthDate).toLocaleDateString("en-GB", {day: "numeric",month: "short",year: "numeric",})}</div>
              </div>
            </div>
          </div>
          {showModal && <EditCustomer setShowModal={setShowModal}
            userid = {userid}/>}
        </div>
      ))}
    </div>
  );
}

export default Card;
