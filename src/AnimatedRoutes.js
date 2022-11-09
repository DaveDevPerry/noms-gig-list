import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Login from './pages/Login';
// import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Loader from './pages/Loader';
import Gigs from './pages/Gigs';
import History from './pages/History';
import Bands from './pages/Bands';
import CreateGig from './pages/CreateGig';
import Venues from './pages/Venues';
import Cities from './pages/Cities';
import Band from './pages/Band';
import City from './pages/City';
import Gig from './pages/Gig';
import Venue from './pages/Venue';
import Statistics from './pages/Statistics';
import Search from './pages/Search';
import { useStateContext } from './lib/context';
import { useEffect, useState } from 'react';
import { log } from './helper';

const AnimatedRoutes = ({
	dataLoaded,
	setDataLoaded,
	user,
	themeToggler,
	theme,
}) => {
	// const tempGroupID = '62f5817cdb2d716e19dfaba7';
	// const [currentFormOpen, setCurrentFormOpen] = useState('');

	// const handleFormChoice = (str) => {
	// 	setCurrentFormOpen(str);
	// };

	// const {dataLoaded, setDataLoaded} = useStateContext()

	// log('only log', user);
	// log('Hello animated routes', 1, 2, Date.now());

	// const [todos, setTodos] = useState([]);
	const [bandGigListStatus, setBandGigListStatus] = useState('all');
	const [filteredBandGigs, setFilteredBandGigs] = useState([]);
	const [decadeChartStatus, setDecadeChartStatus] = useState('20');
	const [filteredDecadeChartData, setFilteredDecadeChartData] = useState([]);
	const {
		bandAllGigsData,
		bandHeadlineGigsData,
		bandSupportGigsData,
		bandFestivalGigsData,
		bandToView,
	} = useStateContext();

	// use effect
	useEffect(() => {
		bandGigListFilterHandler();
		// saveLocalTodos();
	}, [bandGigListStatus, bandToView]);

	// function sand events
	const bandGigListFilterHandler = () => {
		switch (bandGigListStatus) {
			case 'all':
				setFilteredBandGigs(bandAllGigsData);
				break;
			case 'headline':
				setFilteredBandGigs(bandHeadlineGigsData);
				break;
			// case 'deleted':
			// 	setFilteredBandGigs(todos.filter((todo) => todo.completed === false));
			// 	break;
			case 'support':
				setFilteredBandGigs(bandSupportGigsData);
				break;
			case 'festival':
				setFilteredBandGigs(bandFestivalGigsData);
				break;
			default:
				setFilteredBandGigs(bandAllGigsData);
				break;
		}
	};

	const bandGigListStatusHandler = (e) => {
		log(e.target.textContent);
		setBandGigListStatus(e.target.value);
		// setStatus(e.target.value);
	};

	// decade chart data //

	// use effect
	useEffect(() => {
		decadeChartFilterHandler();
		// saveLocalTodos();
	}, [decadeChartStatus]);

	// function sand events
	const decadeChartFilterHandler = () => {
		switch (decadeChartStatus) {
			case '20':
				setFilteredDecadeChartData({
					decade: "20's",
					fullDecade: "2020's",
					prefix: 2,
					gigCountPerYear: [317, 172, 361],
					// gigCountPerYear: [317, 172, 361, 0, 0, 0, 0, 0, 0, 0],
				});
				break;
			case '10':
				setFilteredDecadeChartData({
					decade: "10's",
					fullDecade: "2010's",
					prefix: 1,
					gigCountPerYear: [278, 78, 162, 227, 210, 244, 302, 360, 81, 20],
				});
				break;
			case '00':
				setFilteredDecadeChartData({
					decade: "00's",
					fullDecade: "2000's",
					prefix: 0,
					gigCountPerYear: [275, 267, 304, 9, 41, 212, 146, 97, 32, 235],
				});
				break;
			case '90':
				setFilteredDecadeChartData({
					decade: "90's",
					fullDecade: "1990's",
					prefix: 9,
					gigCountPerYear: [327, 80, 6, 104, 329, 27, 185, 276, 250, 91],
				});
				break;
			case '80':
				setFilteredDecadeChartData({
					decade: "80's",
					fullDecade: "1980's",
					prefix: 8,
					gigCountPerYear: [226, 89, 256, 62, 323, 33, 270, 203, 123, 142],
				});
				break;
			case '70':
				setFilteredDecadeChartData({
					decade: "70's",
					fullDecade: "1970's",
					prefix: 7,
					gigCountPerYear: [234, 216, 175, 112, 208, 358, 141, 260, 193, 293],
				});
				break;
			default:
				setFilteredDecadeChartData({
					decade: "20's",
					fullDecade: "2020's",
					prefix: 2,
					gigCountPerYear: [317, 172, 361],
					// gigCountPerYear: [317, 172, 361, 0, 0, 0, 0, 0, 0, 0],
				});
				break;
		}
	};

	const handleDecadeClick = (e) => {
		// e.preventDefault();
		log(e.target, e.target.innerText, 'handle decade click');
		log(e.target, e.target.dataset.decade, 'handle decade click');
		setDecadeChartStatus(e.target.dataset.decade);
	};

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path='/' element={<Loader />} />
					<Route
						path='/home'
						element={
							user ? (
								<Home themeToggler={themeToggler} theme={theme} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					{/* <Route
						path='/'
						element={user ? <Home /> : <Navigate to='/login' />}
					/> */}
					<Route
						path='/gigs'
						element={user ? <Gigs /> : <Navigate to='/login' />}
					/>
					<Route
						path='/gig'
						element={user ? <Gig /> : <Navigate to='/login' />}
					/>
					<Route
						path='/gigs/new'
						element={user ? <CreateGig /> : <Navigate to='/login' />}
					/>
					<Route
						path='/search'
						element={user ? <Search theme={theme} /> : <Navigate to='/login' />}
					/>
					<Route
						path='/history'
						element={user ? <History /> : <Navigate to='/login' />}
					/>
					<Route
						path='/bands'
						element={
							user ? (
								<Bands themeToggler={themeToggler} theme={theme} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/band'
						element={
							user ? (
								<Band
									bandGigListStatusHandler={bandGigListStatusHandler}
									filteredBandGigs={filteredBandGigs}
									setFilteredBandGigs={setFilteredBandGigs}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/venues'
						element={user ? <Venues theme={theme} /> : <Navigate to='/login' />}
					/>
					<Route
						path='/venue'
						element={user ? <Venue /> : <Navigate to='/login' />}
					/>
					<Route
						path='/cities'
						element={user ? <Cities theme={theme} /> : <Navigate to='/login' />}
					/>
					<Route
						path='/city'
						element={user ? <City /> : <Navigate to='/login' />}
					/>
					<Route
						path='/settings'
						element={
							user ? (
								<Settings themeToggler={themeToggler} theme={theme} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/statistics'
						element={
							user ? (
								<Statistics
									theme={theme}
									handleDecadeClick={handleDecadeClick}
									filteredDecadeChartData={filteredDecadeChartData}
									setFilteredDecadeChartData={setFilteredDecadeChartData}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/login'
						element={!user ? <Login theme={theme} /> : <Navigate to='/' />}
					/>

					<Route path='/signup' element={<Navigate to='/' />} />
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default AnimatedRoutes;

// {/* <Routes
// 					path='/signup'
// 					element={!user ? <Signup theme={theme} /> : <Navigate to='/' />}
// 				/> */}
