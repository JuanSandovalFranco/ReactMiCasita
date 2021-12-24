import React,{ useReducer } from 'react';
import { userReducer } from "./userReducer";
import { UserContext } from "./UserContext"


const UserState = (props)=>{
        const initialState = {
            user:null,
            rol:null
        }



const [state, dispatch] = useReducer(userReducer, initialState)

const getProfile = (id)=>{
    
}

        return (

            <UserContext.Provider value={{
                user:state.user,
                rol:state.rol,
                getProfile
            }}>
                {props.children}
            </UserContext.Provider>

        )

}


export default UserState;