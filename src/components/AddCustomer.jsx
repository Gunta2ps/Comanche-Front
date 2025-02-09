import { useState } from "react";
import { CircleUserRoundIcon, X } from "lucide-react";
import { createUserValidator } from "../utils/validator";
import  useUser  from "../hooks/useUser";

function AddCustomer({ onClose }) {
    const { createUser,getUsersList } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    bdate: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { error } = createUserValidator.validate(formData, { abortEarly: false });
    if (error) {
      const newErrors = {};
      error.details.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      await createUser(formData);
      await getUsersList();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] flex">
        <div className="w-1/3 flex flex-col items-center  pr-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span>
              <CircleUserRoundIcon size={100} strokeWidth={0.5} />
            </span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
            Upload
          </button>
        </div>
        <div className="w-2/3 pl-4 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 cursor-pointer"
          >
            <X size={18} />
          </button>
          <h2 className="text-lg font-bold mb-4">Add/Edit Customer</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Birth Date</label>
              <input
                type="date"
                name="bdate"
                value={formData.bdate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.bdate && (
                <p className="text-red-500 text-sm">{errors.bdate}</p>
              )}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded text-gray-300 bg-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
