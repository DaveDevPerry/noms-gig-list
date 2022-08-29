import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';
import { useGigsContext } from '../hooks/useGigsContext';
import { useBandsContext } from '../hooks/useBandsContext';
import { useStateContext } from '../lib/context';
import { log } from '../helper';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';

import PieWidget from '../components/PieWidget';
import BandsList from '../components/BandsList';
// import { useGigsContext } from '../hooks/useGigsContext';
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

const Bands = ({ themeToggler, theme }) => {
	const { bands, dispatch } = useBandsContext();
	const { gigCounterData } = useGigsContext();
	const { user } = useAuthContext();

	const { totalGigsPerBand, combinedGigsPerBand, dataLoaded } =
		useStateContext();

	const navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

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

			// json.sort((a,b) => a.name > b.name ? 1 : -1)

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_BANDS',
					payload: json,
					// payload: json.sort((a, b) => (a.name > b.name ? 1 : -1)),
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

	// 		// json.sort((a,b) => a.name > b.name ? 1 : -1)

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			gigsDispatch({
	// 				type: 'SET_BANDS_GIG_COUNT',
	// 				payload: json,
	// 				// payload: json.sort((a, b) => (a.name > b.name ? 1 : -1)),
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchGigCountPerBand();
	// 	}
	// }, [gigsDispatch, user]);

	// useEffect(() => {
	// 	setTotalGigsPerBand(bandsGigCount && bandsGigCount);
	// }, [bandsGigCount]);

	// log(gigCountPerBand, 'gig count per band in bands page');
	// log(bandsGigCount, 'bands gig count - bands');
	log(totalGigsPerBand, 'totalGigsPerBand - bands');

	return (
		<StyledBands
			className='bands-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{gigCounterData && gigCounterData.all_gigs.length > 2 && (
				<PieWidget
					themeToggler={themeToggler}
					theme={theme}
					gigs={gigCounterData.all_gigs}
				/>
			)}
			<div className='band-name-list-header'>
				<p>All Bands</p>
				<div>
					<FaUsers className='nav-icon' />
					{bands && bands.length}
				</div>
			</div>
			<BandsList bands={combinedGigsPerBand} />
		</StyledBands>
	);
};
const StyledBands = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 0.3rem;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	flex: 1;
	max-width: 42rem;
	padding: 0 1rem;
	overflow: hidden;
	transition: all 200ms linear;
	margin: 0 auto;
	.band-name-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
			font-size: 1.4rem;
			font-weight: bolder;
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 1.6rem;
			}
		}
	}
`;

export default Bands;
