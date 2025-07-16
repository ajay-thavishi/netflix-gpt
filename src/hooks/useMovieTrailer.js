import { useState, useEffect } from 'react';

import { VIDEOS_URL, API_OPTIONS } from '../util/constants';

const useMovieTrailer = (movieId) => {
	const [trailerKey, setTrailerKey] = useState(null);

	// fetch trailer video based on the movieId
	const getMovieVideos = async () => {
		const data = await fetch(VIDEOS_URL(movieId), API_OPTIONS);
		const json = await data.json();
		// console.log("Videos:", json.results)

		const filteredData = json.results.find((video) => video.type === 'Trailer');
		// console.log("Movie Trailer:", filteredData)

		// if no trailer is found, use the first video
		// This is a fallback in case the movie does not have a trailer
		const trailer = filteredData ? filteredData : json.results[0];
		// console.log("Selected Trailer:", trailer)
		setTrailerKey(trailer.key);
	};

	// useEffect will run only once when the component is mounted
	// It will not run when component re-renders
	// This is because the dependency array is empty
	useEffect(() => {
		getMovieVideos();
	}, []);

	return trailerKey;
};

export default useMovieTrailer;
