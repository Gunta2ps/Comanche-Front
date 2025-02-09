/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserFunction, getAllUserFunction, getUser, loginFunction, updateUserFunction } from "../api/api";
import { useNavigate } from "react-router";

const UserContext = createContext()
function UserContextProvider(props){
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const token = localStorage.getItem('token')
    const [listUser, setListUser] = useState([]);

    const login = async (form) => {
        try{
            const response = await loginFunction(form)
            console.log(response.data.result.user)
            localStorage.setItem('token',response.data.result.token)
            localStorage.setItem('role',response.data.result.user.role)
            setUser(response.data.result.user)
            const role = response.data.result.user.role
            if(role === 'ADMIN'){
                navigate('/admin')
            }else{
                navigate('/')
            }
        }catch(err){
            console.log(err.message)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
        navigate('/')
    }

    const getData = async () => {
        try {
            const storeToken = localStorage.getItem('token')
            const response = await getUser(storeToken)
            setUser(response.data.result)
            return response.data.result
        } catch (error) {
            console.log(error)
        }
    }

    const checkUser = async () => {
        try {
            const token = localStorage.getItem('token')

            if(token){
                const response = await getData()
                if(response.role === 'ADMIN'){
                    navigate('/admin')
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const createUser = async (form) => {
        try {
            await createUserFunction(form,token)
        } catch (error) {
            console.log(error.message)
        }
    }

    const editUser = async (form,id) => {
        try {
            await updateUserFunction(id,form,token)
        } catch (error) {
            console.log(error.message)
        }
    }
    const getUsersList = async () => {
        const response = await getAllUserFunction(token);
        setListUser(response.data.users);
      };
    useEffect(() => {
        checkUser()
    },[])
    return(
        <UserContext.Provider value={{login,logout,user,setUser,checkUser,getData,createUser,editUser,getUsersList,listUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider}
export default UserContext;