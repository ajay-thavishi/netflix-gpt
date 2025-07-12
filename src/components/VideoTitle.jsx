const VideoTitle = ({ originalTitle, overview }) => {
    return (
        <div className="mt-36 ml-12">
            <h1 className="font-bold text-6xl">{originalTitle}</h1>
            <p className="pt-4 text-lg w-1/2">{overview}</p>
            <div className="my-4">
                <button className="border border-gray-400 bg-gray-400 px-4 py-2 text-white rounded-md mx-3 text-xl w-32">
                    ▶️ Play
                </button>
                <button className="border border-gray-400 bg-gray-400 px-4 py-2 text-white rounded-md text-xl">
                    ℹ More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
