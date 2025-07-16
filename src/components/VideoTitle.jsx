const VideoTitle = ({ originalTitle, overview }) => {
	return (
		<div className="absolute mt-64 pl-4 z-50 text-white">
			<h1 className="font-bold text-6xl">{originalTitle}</h1>
			<p className="pt-4 text-lg w-1/2">{overview}</p>
			<div className="my-4">
				<button
					className="border border-white bg-white hover:bg-opacity-80 text-black font-bold px-4 py-2 rounded-md 
				mx-3 text-xl w-32"
				>
					Play
				</button>
				<button
					className="border border-gray-600 bg-gray-600 hover:bg-opacity-80 font-bold px-4 py-2 rounded-md 
				text-xl"
				>
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
