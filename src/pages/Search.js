import { useEffect } from 'react';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
// import GigsForm from '../components/GigForm';
// import { useBandsContext } from '../hooks/useBandsContext';
// import { useCitiesContext } from '../hooks/useCitiesContext';
// import { useVenuesContext } from '../hooks/useVenuesContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import { log } from '../helper';
import SearchForm from '../components/SearchForm';
import AppDetails from '../components/AppDetails';

const Search = ({ theme }) => {
	// const [workouts, setWorkouts] = useState(null);
	// const { gigCounterData, dispatch } = useGigsContext();
	// const { gigData, dispatch } = useGigsContext();
	// const { dispatch: bandDispatch } = useBandsContext();
	// const { dispatch: cityDispatch } = useCitiesContext();
	// const { dispatch: venueDispatch } = useVenuesContext();
	// const { bands, dispatch: bandDispatch} = useBandsContext();
	// const { gigs, dispatch } = useGigsContext();
	// const { gigs, dispatch } = useGigsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	// const { user } = useAuthContext();

	const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		// log(lastDrawDate, 'last draw data');
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	// useEffect(() => {
	// 	const fetchGigs = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			dispatch({
	// 				type: 'SET_GIGS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchGigs();
	// 	}
	// }, [dispatch, user]);

	// useEffect(() => {
	// 	const fetchBands = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		if (response.ok) {
	// 			bandDispatch({
	// 				type: 'SET_BANDS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchBands();
	// 	}
	// }, [bandDispatch, user]);

	// useEffect(() => {
	// 	const fetchVenues = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/venues`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			venueDispatch({
	// 				type: 'SET_VENUES',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchVenues();
	// 	}
	// }, [venueDispatch, user]);

	// useEffect(() => {
	// 	const fetchCities = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/cities`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			cityDispatch({
	// 				type: 'SET_CITIES',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchCities();
	// 	}
	// }, [cityDispatch, user]);

	// log(gigCounterData, 'gig gigCounterData');
	// log(gigData, 'gig data');

	return (
		<StyledSearch
			className='search-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			{/* {gigData &&
				gigData.bandStats.forEach((band, index) => <p key={index}>{band}</p>)} */}
			{/* {gigData && gigData.bands.map((band, index) => <p key={index}>{band}</p>)} */}

			{/* <p className='next-five-list-header'>Create Gig</p> */}
			<SearchForm />
			<AppDetails theme={theme} />
			{/* <GigsList gigs={upcoming_gigs} /> */}
			{/* <GigsList gigs={gigs} /> */}
		</StyledSearch>
	);
};
const StyledSearch = styled(motion.div)`
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	row-gap: 1rem;
	/* border: 2px solid green; */
	height: -webkit-fill-available;
	margin: 0 auto;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	/* .next-five-list-header {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	} */
	max-width: 80rem;
	padding: 0 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
`;

export default Search;
