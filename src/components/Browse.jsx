import Header from './Header';

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
	// Custom hook to fetch now playing movies
	useNowPlayingMovies();

	return (
		<div className="relative flex">
			<Header />
			{/*
			 * MainContainer
			 *     Video Background
			 *     Video Title
			 * SecondaryContainer
			 *     Movies List * n
			 *         Movie Card
			 */}
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default Browse;
