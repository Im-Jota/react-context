import { useReducer } from "react";
import UserContext from "./UserContext";
import { UserReducer } from './UserReducer'

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {     
        const res = await fetch('https://reqres.in/api/users')
            .then((resolve) => resolve.json())
            .then((data) => data);
        dispatch({
            type: 'GET_USERS',
            payload: res.data
        })
    }

    const getProfile = async (id) => {
        const res = await fetch('https://reqres.in/api/users/'+id)
            .then((resolve) => resolve.json())
            .then((data) => data);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data
        })
    }

    return (
        <UserContext.Provider value={{
           users: state.users,
           selectedUser: state.selectedUser,
           getUsers,
           getProfile 
        }}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserState;