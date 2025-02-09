import  { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import { getUser } from '../api/api'

function ProtectRoute({element,allow}) {
    const [isAllowed, setIsAllowed] = useState(null)
    const {setUser} = useUser()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            checkRole()
        }
    },[])

    const checkRole = async () =>{
        try {
            const token = localStorage.getItem('token')
            const response = await getUser(token)
            setUser(response.data.result)
            const role = response.data.result.role
            if(allow.includes(role)){
                setIsAllowed(true)
            }else{
                setIsAllowed(false)
            }
        } catch (error) {
            console.log(error.message)
            setIsAllowed(false)
        }
    }

    return (
    element
  )
}

export default ProtectRoute
