import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../util/constants"
import { addNowPlayingMovies } from "../util/moviesSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    // Fetch the TMDB API(now playing movies list API)and add them to the Redux store
    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
        // console.log(json.results)
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies
