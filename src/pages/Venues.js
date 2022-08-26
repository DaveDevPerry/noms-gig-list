// import { useEffect, useRef, useState } from 'react';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useVenuesContext } from '../hooks/useVenuesContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';
// import VenueCard from '../components/VenueCard';
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import VenuesList from '../components/VenuesList';
// import { log } from '../helper';
// import { useEffect } from 'react';

const Venues = () => {
	// const { venues } = useVenuesContext();
	const { dispatch } = useVenuesContext();
	// const { venues, dispatch } = useVenuesContext();
	// const { band_gig_data, dispatch } = useGigsContext();
	const { user } = useAuthContext();

	const { totalGigsPerVenue, dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		// log(lastDrawDate, 'last draw data');
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	useEffect(() => {
		const fetchVenues = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/venues`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_VENUES',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchVenues();
		}
	}, [dispatch, user]);

	// useEffect(() => {
	// 	const fetchGigsPerUniqueVenue = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		log(json, 'json in venues')

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			dispatch({
	// 				type: 'SET_VENUES',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchGigsPerUniqueVenue();
	// 	}
	// }, [dispatch, user]);
	// useEffect(() => {
	// 	const fetchGigCountPerBand = async () => {
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
	// 			// setWorkouts(json);
	// 			dispatch({
	// 				type: 'SET_GIG_COUNT_PER_BAND',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchGigCountPerBand();
	// 	}
	// }, [dispatch, user]);

	// log(band_gig_data, 'band gig data - bands');

	return (
		<StyledVenues
			className='venues-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='venue-name-list-header'>
				<p>All venues</p>
				<div>
					<FaUsers className='nav-icon' />x
					{totalGigsPerVenue && totalGigsPerVenue.length}
					{/* <FaUsers className='nav-icon' />x{venues && venues.length} */}
				</div>
			</div>

			<VenuesList venues={totalGigsPerVenue} />
			{/* <VenuesList venues={venues} /> */}
		</StyledVenues>
	);
};
const StyledVenues = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	row-gap: 1rem;
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	padding: 1rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 0.3rem;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	flex: 1;
	max-width: 42rem;
	padding: 0 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	margin: 0 auto;
	.venue-name-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding: 0rem 1rem; */
		padding: 0.2rem 0.5rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
		}
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
		}
	}
`;

export default Venues;
