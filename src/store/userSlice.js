import { createSlice } from '@reduxjs/toolkit';

const defaultInitialState = {
    token: null,
    active: false,
    details: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState: defaultInitialState,
    reducers: {
        loginUser: (state, action) => {
            state.token = action.payload.token
            state.active = true
            state.details = action.payload.user
        },
        logoutUser: (state, action) => {
            state = defaultInitialState
        }
    }
})

export default userSlice