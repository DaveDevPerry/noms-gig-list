import { useCitiesContext } from '../hooks/useCitiesContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';
// import CityCard from '../components/CityCard';
import { FaUsers } from 'react-icons/fa';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import CitiesList from '../components/CitiesList';
import { log } from '../helper';
// import { useEffect } from 'react';

const Cities = () => {
	// const { cities } = useCitiesContext();
	const { cities, dispatch } = useCitiesContext();
	// const { citiesGigCount, dispatch: gigsDispatch } = useGigsContext();
	// const { band_gig_data, dispatch } = useGigsContext();
	const { user } = useAuthContext();

	const { totalGigsPerCity, dataLoaded } = useStateContext();

	// const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		// log(lastDrawDate, 'last draw data');
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

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

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_CITIES',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchCities();
		}
	}, [dispatch, user]);

	// useEffect(() => {
	// 	const fetchGigCountPerCity = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		// json.sort((a,b) => a.name > b.name ? 1 : -1)

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			gigsDispatch({
	// 				type: 'SET_CITIES_GIG_COUNT',
	// 				payload: json,
	// 				// payload: json.sort((a, b) => (a.name > b.name ? 1 : -1)),
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchGigCountPerCity();
	// 	}
	// }, [gigsDispatch, user]);

	// useEffect(() => {
	// 	setTotalGigsPerCity(citiesGigCount && citiesGigCount);
	// }, [citiesGigCount]);
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
	log(totalGigsPerCity, 'totalGigsPerCity - cities');

	return (
		<StyledCities
			className='cities-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			{/* <GigsList gigs={gigs} /> */}
			{/* {cities && cities.map((band) => <p key={band._id}>{band.name}</p>)} */}
			<div className='city-name-list-header'>
				<p>All cities</p>
				<div>
					<FaUsers className='nav-icon' />x{cities && cities.length}
				</div>
			</div>
			{/* {totalGigsPerCity &&
				totalGigsPerCity.map((city, index) => (
					<CityCard key={index} city={city} />
				))} */}
			<CitiesList cities={totalGigsPerCity} />
			{/* {cities && cities.map((city) => <CityCard key={city._id} city={city} />)} */}
			{/* <p>city PAGE</p> */}
			{/* <Auto /> */}
		</StyledCities>
	);
};
const StyledCities = styled(motion.div)`
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
	.city-name-list-header {
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

export default Cities;
