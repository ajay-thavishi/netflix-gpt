import { configureStore } from "@reduxjs/toolkit"

import userInfoReducer from "./userInfoSlice"
import moviesReducer from "./moviesSlice"

const appStore = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        movies: moviesReducer,
    },
})

export default appStore
