import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token:null,
        active: false,
        user:{}
    },
    reducers:{
        loginUser: (state, action) =>{
            state.token = action.payload.token
            state.active = action.payload.active
            state.user = action.payload.user
        },
        logoutUser: (state, action) =>{
            state = {token: null, active: false}
        }
    }
})

export default userSlice