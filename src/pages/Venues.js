// import { useEffect, useRef, useState } from 'react';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useVenuesContext } from '../hooks/useVenuesContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';
import VenueCard from '../components/VenueCard';
import { FaUsers } from 'react-icons/fa';
// import { useEffect } from 'react';

const Venues = () => {
	// const { venues } = useVenuesContext();
	const { venues, dispatch } = useVenuesContext();
	// const { band_gig_data, dispatch } = useGigsContext();
	const { user } = useAuthContext();

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

	// console.log(band_gig_data, 'band gig data - bands');

	return (
		<StyledVenues
			className='venues-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			{/* <GigsList gigs={gigs} /> */}
			{/* {venues && venues.map((band) => <p key={band._id}>{band.name}</p>)} */}
			<div className='venue-name-list-header'>
				<p>All venues</p>
				<div>
					<FaUsers className='nav-icon' />x{venues && venues.length}
				</div>
			</div>
			{venues &&
				venues.map((venue) => <VenueCard key={venue._id} venue={venue} />)}
			{/* <p>venue PAGE</p> */}
			{/* <Auto /> */}
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
	.venue-name-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;

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
