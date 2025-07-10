import { configureStore } from "@reduxjs/toolkit"

import userInfoReducer from "./userInfoSlice"

const appStore = configureStore({
    reducer: {
        userInfo: userInfoReducer,
    },
})

export default appStore
