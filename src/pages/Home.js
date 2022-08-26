import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import CountdownWidget from '../components/CountdownWidget';
import GigsListNextFive from '../components/GigsListNextFive';
// import TopBandWidget from '../components/TopBandWidget';
// import GigTotalWidget from '../components/GigTotalWidget';
import PieWidget from '../components/PieWidget';
// import TopCityWidget from '../components/TopCityWidget';
// import CityTotalWidget from '../components/CityTotalWidget';
import AllTopsWidget from '../components/AllTopsWidget';
import { log } from '../helper';
// import ChartYearWidget from '../components/ChartYearWidget';
// import NextGigCountdownWidget from '../components/NextGigCountdownWidget';

const Home = () => {
	const { gigCounterData, dispatch } = useGigsContext();
	const { user } = useAuthContext();
	const {
		totalGigsPerBand,
		totalGigsPerCity,
		totalGigsPerVenue,
		totalSupportGigsPerBand,
		dataLoaded,
	} = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	useEffect(() => {
		const fetchGigCounterData = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			if (response.ok) {
				dispatch({
					type: 'SET_GIG_COUNTER_DATA',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGigCounterData();
		}
	}, [dispatch, user]);

	log(gigCounterData, 'gig counter data');
	log(totalGigsPerVenue, 'totalGigsPerVenue data');

	return (
		<StyledHome
			className='home'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{gigCounterData && (
				<CountdownWidget gig={gigCounterData.next_five_gigs[0]} />
			)}
			{gigCounterData && (
				<div className='stat-container'>
					<AllTopsWidget
						bandWinner={totalGigsPerBand[0]}
						venueWinner={totalGigsPerVenue[0]}
						cityWinner={totalGigsPerCity[0]}
						supportWinner={totalSupportGigsPerBand[0]}
					/>
				</div>
			)}
			{/* {gigCounterData && (
				<div className='stat-container'>
					<TopBandWidget gigCounterData={totalGigsPerBand[0]} />
					<GigTotalWidget gigCounterData={gigCounterData} />
				</div>
			)} */}
			{/* {gigCounterData && (
				<div className='stat-container'>
					<CityTotalWidget gigCounterData={totalGigsPerCity} />
					<TopCityWidget gigCounterData={totalGigsPerCity[0]} />
				</div>
			)} */}
			{gigCounterData && <PieWidget gigs={gigCounterData.all_gigs} />}
			{/* {gigCounterData && <ChartYearWidget gigs={gigCounterData.all_gigs} />} */}
			<p className='next-five-list-header'>Coming Up</p>
			{gigCounterData && (
				<GigsListNextFive gigs={gigCounterData.next_five_gigs} />
			)}
		</StyledHome>
	);
};
const StyledHome = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	flex: 1;
	max-width: 42rem;
	padding: 0 1rem;
	overflow: hidden;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.primaryColor};
	::-webkit-scrollbar {
		width: 5px;
		background: rgb(75, 74, 74);
		user-select: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}
	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}
	.stat-container {
		display: flex;
		justify-content: space-between;
		column-gap: 1rem;
	}
	.instruction-title {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
	}
	.next-five-list-header {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	}
`;

export default Home;
