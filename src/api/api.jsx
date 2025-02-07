import axios from "axios";

export const loginFunction = (form) => axios.post('/auth/login',form)

export const getAllUserFunction = (token) => axios.get('/user',{
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export const getUserFunction = (id,token) => axios.get(`/user/${id}`,{
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export const createUserFunction = (form,token) => axios.post('/user',form,{
    headers:{
        'Authorization': `Bearer ${token}`
    }
})

export const updateUserFunction = (id,form,token) => axios.put(`/user/${id}`,form,{
    headers:{
        'Authorization': `Bearer ${token}`
    }
})

export const deleteUserFunction = (id,token) => axios.delete(`/user/${id}`,{
    headers:{
        'Authorization': `Bearer ${token}`
    }
})