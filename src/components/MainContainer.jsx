import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const nowPlayingMoviesList = useSelector((store) => store.movies?.nowPlayingMovies)
    // console.log("Now Playing Movies List:", nowPlayingMoviesList)

    // early return if no movies are available
    if (!nowPlayingMoviesList) return

    const mainMovie = nowPlayingMoviesList[0]
    // console.log("main movie:", mainMovie)

    const { original_title, overview, id } = mainMovie

    return (
        <div>
            <h2>Main Container</h2>
            <VideoBackground movieId={id} />
            <VideoTitle originalTitle={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer
