/* eslint-disable react/prop-types */
import { EllipsisVertical } from "lucide-react";

function Card({ user }) {
  return (
    <div className="m-4 flex flex-wrap gap-10">
      {user.map((item) => (
        <div className="bg-white w-100 h-48 rounded-xl flex" key={item.id}>
          <div className="w-1/3 p-2 flex justify-center items-center">Pic</div>
          <div className="w-2/3 p-2">
            <div className="h-1/20 flex justify-end text-blue-400">
              <EllipsisVertical />
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
                <div>{item.bdate}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
