// Aquí solo vamos a deifinir

import { useReducer, useState } from "react"

const UserState = () => {

    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(first, second, third)

    const getUsers = () => { }

    const getProfile = () => { }
}


export default UserState;