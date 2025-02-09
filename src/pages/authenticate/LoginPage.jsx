import { useState } from "react";
import useUser from "../../hooks/useUser";


function LoginPage() {
  const {login} = useUser()
  const [form, seForm] = useState({
    email:'',
    password:''
  })
  console.log(login);
  const handleChange = (e) =>{
    seForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(form);
    try {
      await login(form)  
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="h-screen bg-blue-400 flex items-center justify-center">
      <div className="w-1/4 h-100 bg-gray-200 rounded-xl flex flex-col items-center">
        <div className="w-full h-1/2 flex flex-col items-center justify-center gap-4">
          <img className="w-2/3" src="https://gogoji.co.th/images/gogoji-logo.png" alt="" />
        </div>
        <div className="w-full h-1/2 ">
        <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
          <input className="w-2/3 h-10 rounded-lg p-4 bg-white"
          type="text"
          name ='email'
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          />
          <input className="w-2/3 h-10 rounded-lg p-4 bg-white"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"/>
          <button className="w-2/3 h-10 rounded-lg bg-blue-400 text-white">LOGIN</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
