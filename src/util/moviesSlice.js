import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
    },
})

// console.log("moviesSlice", moviesSlice)

export default moviesSlice.reducer

export const { addNowPlayingMovies } = moviesSlice.actions
