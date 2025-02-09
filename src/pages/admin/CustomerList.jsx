import { AlignJustify, LayoutGrid, Plus, X } from "lucide-react";
import Table from "../../components/Table";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import AddCustomer from "../../components/AddCustomer";
import { getAllUserFunction } from "../../api/api";
import useUser from "../../hooks/useUser";

function CustomerList() {
  const [show, setShow] = useState("Table");
  const [showModal, setShowModal] = useState(false);
  const {getUsersList,listUser} = useUser()
  

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="h-full bg-gray-200">
      <div className="flex justify-between px-4 mt-4">
        <div>
          <button
            className="flex py-2 px-1 bg-blue-400 rounded-xl text-white cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <Plus />
            Add Customer
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className=" bg-white rounded-lg w-10 flex text-center justify-center items-center text-blue-400 cursor-pointer"
            onClick={() => {
              setShow("Table");
            }}
          >
            <AlignJustify />
          </button>
          <button
            className=" bg-white rounded-lg w-10 flex text-center justify-center items-center text-blue-400 cursor-pointer"
            onClick={() => {
              setShow("Card");
            }}
          >
            <LayoutGrid />
          </button>
        </div>
      </div>
      <div className="w-full">
        {show === "Table" ? (
          <Table user={listUser} />
        ) : (
          <Card user={listUser} />
        )}
      </div>

      {showModal && <AddCustomer onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default CustomerList;
