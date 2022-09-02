import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import { useGigsContext } from '../hooks/useGigsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
// import CountdownWidget from '../components/CountdownWidget';
// import GigsListNextFive from '../components/GigsListNextFive';
// import TopBandWidget from '../components/TopBandWidget';
// import GigTotalWidget from '../components/GigTotalWidget';
import PieWidget from '../components/PieWidget';
// import TopCityWidget from '../components/TopCityWidget';
// import CityTotalWidget from '../components/CityTotalWidget';
import AllTopsWidget from '../components/AllTopsWidget';
// import { log } from '../helper';
// import FirstGigWidget from '../components/FirstGigWidget';
// import KeyWidget from '../components/KeyWidget';
import ChartDecadeWidget from '../components/ChartDecadeWidget';
// import FestivalTotalWidget from '../components/FestivalTotalWidget';
// import CountersWidget from '../components/CountersWidget';
import { log } from '../helper';
// import ChartWidget from '../components/ChartWidget';
import DecadeChartsWidget from '../components/DecadeChartsWidget';
// import ChartYearWidget from '../components/ChartYearWidget';
// import NextGigCountdownWidget from '../components/NextGigCountdownWidget';

const Statistics = ({
	themeToggler,
	theme,
	handleDecadeClick,
	filteredDecadeChartData,
	setFilteredDecadeChartData,
}) => {
	const { gigCounterData } = useGigsContext();
	// const { user } = useAuthContext();
	const {
		totalGigsPerBand,
		totalGigsPerCity,
		totalGigsPerVenue,
		totalSupportGigsPerBand,
		totalCityGigs,
		dataLoaded,
	} = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	log(totalGigsPerCity, 'total gigs per city - stats');
	log(totalCityGigs, 'totalCityGigs - stats');

	// useEffect(() => {
	// 	const fetchGigCounterData = async () => {
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
	// 				type: 'SET_GIG_COUNTER_DATA',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchGigCounterData();
	// 	}
	// }, [dispatch, user]);

	// log(gigCounterData, 'gig counter data');
	// log(totalGigsPerVenue, 'totalGigsPerVenue data');

	return (
		<StyledStatistics
			className='statistics-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* {gigCounterData &&
				totalGigsPerBand.length === 0 &&
				totalGigsPerVenue.length === 0 &&
				totalGigsPerCity.length === 0 &&
				totalSupportGigsPerBand.length === 0 &&
				gigCounterData.next_five_gigs.length === 0 && (
					<>
						<FirstGigWidget />
						<KeyWidget />
					</>
				)} */}

			{/* {gigCounterData && gigCounterData.next_five_gigs.length > 0 && (
						<CountdownWidget gig={gigCounterData.next_five_gigs[0]} />
					)} */}

			{/* {gigCounterData && (
				<CountersWidget gigCounterData={gigCounterData && gigCounterData} />
			)} */}

			{gigCounterData &&
				totalGigsPerBand &&
				totalGigsPerVenue &&
				totalGigsPerCity &&
				totalSupportGigsPerBand &&
				gigCounterData.next_five_gigs && (
					<div className='stat-container'>
						<AllTopsWidget
							bandWinner={totalGigsPerBand[0]}
							venueWinner={totalGigsPerVenue[0]}
							cityWinner={totalCityGigs[0]}
							supportWinner={totalSupportGigsPerBand[0]}
						/>
					</div>
				)}

			{/* {gigCounterData && gigCounterData.all_gigs.length > 2 && (
				<PieWidget
					themeToggler={themeToggler}
					theme={theme}
					gigs={gigCounterData.all_gigs}
				/>
			)} */}
			{gigCounterData && gigCounterData.all_gigs.length > 2 && (
				<ChartDecadeWidget
					themeToggler={themeToggler}
					theme={theme}
					gigs={gigCounterData.all_gigs}
				/>
			)}

			{/* <ChartWidget theme={theme} /> */}

			<DecadeChartsWidget
				handleDecadeClick={handleDecadeClick}
				filteredDecadeChartData={filteredDecadeChartData}
				setFilteredDecadeChartData={setFilteredDecadeChartData}
			/>

			{gigCounterData && gigCounterData.all_gigs.length > 2 && (
				<PieWidget
					themeToggler={themeToggler}
					theme={theme}
					gigs={gigCounterData.all_gigs}
				/>
			)}
			{/* {gigCounterData && gigCounterData.next_five_gigs.length > 0 && (
						<>
							<div className='next-five-list-header'>
								<p>Coming Up</p>
								<NavLink to='/gigs'>view all</NavLink>
							</div>
							{gigCounterData && (
								<GigsListNextFive gigs={gigCounterData.next_five_gigs} />
							)}
						</>
					)} */}

			{/* <FirstGigWidget />
			<KeyWidget /> */}

			{/* {gigCounterData && gigCounterData.next_five_gigs.length > 0 && (
				<CountdownWidget gig={gigCounterData.next_five_gigs[0]} />
			)}
			{gigCounterData &&
				totalGigsPerBand.length > 0 &&
				totalGigsPerVenue.length > 0 &&
				totalGigsPerCity.length > 0 &&
				totalSupportGigsPerBand.length > 0 &&
				gigCounterData.next_five_gigs.length > 0 && (
					<div className='stat-container'>
						<AllTopsWidget
							bandWinner={totalGigsPerBand[0]}
							venueWinner={totalGigsPerVenue[0]}
							cityWinner={totalGigsPerCity[0]}
							supportWinner={totalSupportGigsPerBand[0]}
						/>
					</div>
				)} */}

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
			{/* {gigCounterData && gigCounterData.all_gigs.length > 2 && (
				<PieWidget gigs={gigCounterData.all_gigs} />
			)} */}
			{/* {gigCounterData && <ChartYearWidget gigs={gigCounterData.all_gigs} />} */}

			{/* {gigCounterData && gigCounterData.next_five_gigs.length > 0 && (
				<>
					<p className='next-five-list-header'>Coming Up</p>
					{gigCounterData && (
						<GigsListNextFive gigs={gigCounterData.next_five_gigs} />
					)}
				</>
			)} */}
			{/* {gigCounterData && gigCounterData.next_five_gigs.length > 0 && (
				<>
					<div className='next-five-list-header'>
						<p>Coming Up</p>
						<NavLink to='/gigs'>view all</NavLink>
					</div>
					{gigCounterData && (
						<GigsListNextFive gigs={gigCounterData.next_five_gigs} />
					)}
				</>
			)} */}

			{/* {gigCounterData && gigCounterData.next_five_gigs.length > 0 && (
				<>
					<p className='next-five-list-header'>Coming Up</p>
					{gigCounterData && (
						<GigsListNextFive gigs={gigCounterData.next_five_gigs} />
					)}
				</>
			)} */}
		</StyledStatistics>
	);
};
const StyledStatistics = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	flex: 1;
	max-width: 42rem;
	padding: 0 1rem;
	/* overflow: hidden; */
	overflow-y: auto;
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
	/* .next-five-list-header {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	} */
	.next-five-list-header {
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
		a {
			font-style: italic;
			color: ${({ theme }) => theme.txtDarkGrey};
			text-decoration: none;
		}
	}
`;

export default Statistics;
