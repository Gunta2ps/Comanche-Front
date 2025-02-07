/* eslint-disable react/prop-types */
import { createContext } from "react";

const UserContext = createContext()
function UserContextProvider(props){


    return(
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider}
export default UserContext;