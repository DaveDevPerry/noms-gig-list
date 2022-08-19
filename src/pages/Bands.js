// import { useEffect, useRef, useState } from 'react';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useBandsContext } from '../hooks/useBandsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';
import BandCard from '../components/BandCard';
import { FaUsers } from 'react-icons/fa';
// import { useEffect } from 'react';

// components
// import GigsList from '../components/GigsList';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';

// const Auto = () => {
// 	const { user } = useAuthContext();
// 	const [display, setDisplay] = useState(false);
// 	const [options, setOptions] = useState([]);
// 	const [search, setSearch] = useState('');
// 	const wrapperRef = useRef(null);

// 	useEffect(() => {
// 		const fetchAllBands = async () => {
// 			const response = await fetch(
// 				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
// 				{
// 					headers: {
// 						Authorization: `Bearer ${user.token}`,
// 					},
// 				}
// 			);
// 			const json = await response.json();

// 			if (response.ok) {
// 				// setWorkouts(json);
// 				setOptions(json);
// 				// setOptions(allBands);
// 				// dispatch({
// 				// 	type: 'SET_BANDS',
// 				// 	payload: json,
// 				// });
// 			}
// 		};
// 		// if we have a value for the user then fetch the workouts
// 		if (user) {
// 			fetchAllBands();
// 		}
// 		// const allBands = [];
// 		// const promises =
// 		// 	// const promises = new Array(20)
// 		// 	// .fill()
// 		// 	// .map((v, i) =>
// 		// 	fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bands`);
// 		// // fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bands/${i + 1}`)
// 		// Promise.all(promises).then((bandsArr) => {
// 		// 	return bandsArr.map((res) =>
// 		// 		res.json().then(({ name }) => {
// 		// 			return allBands.push({ name });
// 		// 		})
// 		// 	);
// 		// });
// 		// setOptions(allBands);
// 	}, []);
// 	// useEffect(() => {
// 	// 	const allBands = [];
// 	// 	const promises =
// 	// 		// const promises = new Array(20)
// 	// 		// .fill()
// 	// 		// .map((v, i) =>
// 	// 		fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bands`);
// 	// 	// fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bands/${i + 1}`)
// 	// 	Promise.all(promises).then((bandsArr) => {
// 	// 		return bandsArr.map((res) =>
// 	// 			res.json().then(({ name }) => {
// 	// 				return allBands.push({ name });
// 	// 			})
// 	// 		);
// 	// 	});
// 	// 	setOptions(allBands);
// 	// }, []);

// 	// sets event listeners
// 	useEffect(() => {
// 		document.addEventListener('mousedown', handleClickOutside);

// 		return () => {
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, []);

// 	const handleClickOutside = (event) => {
// 		const { current: wrap } = wrapperRef;
// 		if (wrap && !wrap.contains(event.target)) {
// 			setDisplay(false);
// 		}
// 	};

// 	const setBandDex = (poke) => {
// 		setSearch(poke);
// 		setDisplay(false);
// 	};

// 	return (
// 		<div className='search-container' ref={wrapperRef}>
// 			<input
// 				id='auto'
// 				placeholder='type to search'
// 				onClick={() => setDisplay(!display)}
// 				value={search}
// 				onChange={(event) => setSearch(event.target.value)}
// 			/>
// 			{display && (
// 				<div className='autoContainer'>
// 					{options
// 						.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
// 						.map((v, i) => {
// 							return (
// 								<div
// 									key={i}
// 									className='option'
// 									onClick={() => setBandDex(v.name)}
// 								>
// 									<span>{v.name}</span>
// 									{/* <img src={v.sprite} alt='pokemon' /> */}
// 								</div>
// 							);
// 						})}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

const Bands = () => {
	// const { bands } = useBandsContext();
	const { bands, dispatch } = useBandsContext();
	// const { band_gig_data, dispatch } = useGigsContext();
	const { user } = useAuthContext();

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

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_BANDS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchBands();
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
		<StyledBands
			className='bands-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			{/* <GigsList gigs={gigs} /> */}
			{/* {bands && bands.map((band) => <p key={band._id}>{band.name}</p>)} */}
			<div className='band-name-list-header'>
				<p>All Bands</p>
				<div>
					<FaUsers className='nav-icon' />x{bands && bands.length}
				</div>
			</div>
			{bands && bands.map((band) => <BandCard key={band._id} band={band} />)}
			{/* <p>BAND PAGE</p> */}
			{/* <Auto /> */}
		</StyledBands>
	);
};
const StyledBands = styled(motion.div)`
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
	.band-name-list-header {
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

export default Bands;
