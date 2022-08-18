import { useEffect } from 'react';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import GigsForm from '../components/GigForm';
import { useBandsContext } from '../hooks/useBandsContext';
import { useCitiesContext } from '../hooks/useCitiesContext';

// components
// import GigsList from '../components/GigsList';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';

const CreateGig = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { gigData, dispatch } = useGigsContext();
	const { dispatch: bandDispatch } = useBandsContext();
	const { dispatch: cityDispatch } = useCitiesContext();
	// const { bands, dispatch: bandDispatch} = useBandsContext();
	// const { gigs, dispatch } = useGigsContext();
	// const { gigs, dispatch } = useGigsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchGigs = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			// // get future gigs only
			// console.log(json, 'json set gigs');
			// const clonedGigs = [...json];
			// const upcomingGigs = clonedGigs.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });
			// console.log(upcomingGigs, 'upcoming');
			// const upcomingGigsSort = json.sort((a, b) => {
			// 	return new Date(a.gig_date) - new Date(b.gig_date);
			// });
			// console.log(upcomingGigsSort, 'upcoming');
			// const filtered = upcomingGigsSort.filter((gig) => {
			// 	return (
			// 		new Date(gig.gig_date) > new Date() ||
			// 		new Date(gig.gig_date) === new Date()
			// 	);
			// });
			// console.log(filtered, 'filtered');

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_GIGS',
					payload: json,
					// payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGigs();
		}
	}, [dispatch, user]);

	useEffect(() => {
		const fetchBands = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			// // get future gigs only
			// console.log(json, 'json set gigs');
			// const clonedGigs = [...json];
			// const upcomingGigs = clonedGigs.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });
			// console.log(upcomingGigs, 'upcoming');
			// const upcomingGigsSort = json.sort((a, b) => {
			// 	return new Date(a.gig_date) - new Date(b.gig_date);
			// });
			// console.log(upcomingGigsSort, 'upcoming');
			// const filtered = upcomingGigsSort.filter((gig) => {
			// 	return (
			// 		new Date(gig.gig_date) > new Date() ||
			// 		new Date(gig.gig_date) === new Date()
			// 	);
			// });
			// console.log(filtered, 'filtered');

			if (response.ok) {
				// setWorkouts(json);
				bandDispatch({
					type: 'SET_BANDS',
					payload: json,
					// payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchBands();
		}
	}, [bandDispatch, user]);

	// console.log(gigData, 'gig data');
	// console.log(gigData.bandStats, 'gig data');
	// console.log(bands, 'gig data - bands');
	// console.log(all_gigs, 'gig data - gigs');

	useEffect(() => {
		const fetchCities = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/cities`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			// // get future gigs only
			// console.log(json, 'json set gigs');
			// const clonedGigs = [...json];
			// const upcomingGigs = clonedGigs.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });
			// console.log(upcomingGigs, 'upcoming');
			// const upcomingGigsSort = json.sort((a, b) => {
			// 	return new Date(a.gig_date) - new Date(b.gig_date);
			// });
			// console.log(upcomingGigsSort, 'upcoming');
			// const filtered = upcomingGigsSort.filter((gig) => {
			// 	return (
			// 		new Date(gig.gig_date) > new Date() ||
			// 		new Date(gig.gig_date) === new Date()
			// 	);
			// });
			// console.log(filtered, 'filtered');

			if (response.ok) {
				// setWorkouts(json);
				cityDispatch({
					type: 'SET_CITIES',
					payload: json,
					// payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchCities();
		}
	}, [cityDispatch, user]);

	console.log(gigData, 'gig data');

	return (
		<StyledGigs
			className='gigs-page'
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
			<GigsForm />
			{/* <GigsList gigs={upcoming_gigs} /> */}
			{/* <GigsList gigs={gigs} /> */}
		</StyledGigs>
	);
};
const StyledGigs = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* border: 2px solid green; */
	height: -webkit-fill-available;
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
`;

export default CreateGig;
