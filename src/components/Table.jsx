/* eslint-disable react/prop-types */
import { EllipsisVertical } from "lucide-react";

function Table({ user }) {
  return (
    <div className=" overflow-auto scrollbar-hidden flex justify-start">
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
          {user.map((item) => (
            <tr className="my-4" key={item.id}>
            <td className="px-4 py-2 text-center rounded-l-xl">id</td>
            <td className="px-4 py-2 text-center">{item.name}</td>
            <td className="px-4 py-2 text-center">{item.address}</td>
            <td className="px-4 py-2 text-center">{item.email}</td>
            <td className="px-4 py-2 text-center">{item.phone}</td>
            <td className="px-4 py-2 text-center">{item.bdate}</td>
            <td className=" rounded-r-xl">
              <button className="py-2 text-blue-400">
                <EllipsisVertical />
              </button>
            </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
