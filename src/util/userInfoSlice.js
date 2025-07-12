import { createSlice } from "@reduxjs/toolkit"

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: null,
    reducers: {
        addUserInfo: (state, action) => {
            // console.log("User info added:", action.payload)
            return action.payload
        },
        removeUserInfo: (state, action) => {
            console.log("User info removed")
            return null
        },
    },
})

export default userInfoSlice.reducer

export const { addUserInfo, removeUserInfo } = userInfoSlice.actions
