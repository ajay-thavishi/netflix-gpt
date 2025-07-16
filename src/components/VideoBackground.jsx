import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
	const trailerKey = useMovieTrailer(movieId);

	return (
		<div className="absolute z-10">
			{/* <h3>Video Background</h3> */}
			<iframe
				src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
				className="w-screen aspect-video"
			></iframe>
		</div>
	);
};

export default VideoBackground;
