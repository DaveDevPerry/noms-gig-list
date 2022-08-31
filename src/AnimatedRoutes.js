import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Weights from './pages/Gigs';
import Settings from './pages/Settings';
import Loader from './pages/Loader';
// import Groups from './pages/Groups';
// import GroupsFullDetails from './pages/[slug]';
// import { useState } from 'react';
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
// import { log } from './helper';
// import { log } from './helper';
// import { useStateContext } from './lib/context';
// import { groupsReducer } from './context/GroupContext';
// import GroupsFullDetails from './pages/groups/[slug]';

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
						element={user ? <Band /> : <Navigate to='/login' />}
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
							user ? <Statistics theme={theme} /> : <Navigate to='/login' />
						}
					/>
					<Route
						path='/login'
						element={!user ? <Login theme={theme} /> : <Navigate to='/' />}
					/>
					<Route
						path='/signup'
						element={!user ? <Signup theme={theme} /> : <Navigate to='/' />}
					/>
					{/* <Route
						path='/groups'
						element={
							user ? (
								<Groups
									setCurrentFormOpen={setCurrentFormOpen}
									currentFormOpen={currentFormOpen}
									handleFormChoice={handleFormChoice}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/groups/:id'
						element={<GroupsFullDetails tempGroupID={tempGroupID} />}
					/> */}
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default AnimatedRoutes;
