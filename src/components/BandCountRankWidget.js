import React from 'react';
import styled from 'styled-components';
// import { GiLaurelsTrophy } from 'react-icons/gi';
import { useStateContext } from '../lib/context';
// import { SiBandsintown } from 'react-icons/si';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import gigBarWidget from './gigBarWidget';

const BandCountRankWidget = ({
	bandWinner,
	cityWinner,
	venueWinner,
	supportWinner,
	bandCounterData,
}) => {
	const { bandFestivalCount, bandHeadlineGigsData, bandSupportGigsData } =
		useStateContext();
	// const percentage = 20.345;
	// const { gigCounterData } = useGigsContext();
	// const { gigCounterData, dispatch } = useGigsContext();
	// const { user } = useAuthContext();

	// useEffect(() => {

	// 	const fetchGigCounterData = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
	// 			{
	// 				// const response = await fetch('/api/weights', {
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			dispatch({
	// 				type: 'SET_GIG_COUNTER_DATA',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		// fetchGigs();
	// 		fetchGigCounterData();
	// 	}
	// }, [dispatch, user]);

	// log(gigCounterData, 'gig counter data');

	return (
		<StyledBandCountRankWidget className='gig-widget'>
			{/* <SiBandsintown className='arrow-icon hand gold' /> */}
			<div className='progress-widget-wrapper-container'>
				<div className='wrapper'>
					<p className='figure'>
						<strong>
							{bandCounterData &&
							bandCounterData.length &&
							bandCounterData.length < 10
								? `0${bandCounterData.length}`
								: bandCounterData.length}
						</strong>
					</p>
					<p className='stat-name'>All Gigs</p>
					{/* <p className='figure'>
						<strong>{bandCounterData && bandCounterData.length}</strong>
					</p> */}
				</div>

				{/* <div className='wrapper-icon'>
					<p className='figure'>
						
						{(
							weights[weights.length - 1].load -
							weights.sort((a, b) => {
								return new Date(a.createdAt) - new Date(b.createdAt);
							})[0].load
						).toFixed(2)}
					</p>
					{(
						weights[weights.length - 1].load -
						weights.sort((a, b) => {
							return new Date(a.createdAt) - new Date(b.createdAt);
						})[0].load
					).toFixed(2) > 0 && <ImArrowUp className='arrow-icon red' />}
					{(
						weights[weights.length - 1].load -
						weights.sort((a, b) => {
							return new Date(a.createdAt) - new Date(b.createdAt);
						})[0].load
					).toFixed(2) < 0 && <ImArrowDown className='arrow-icon green' />}
					<p className='figure'>
						{(
							(weights[weights.length - 1].load -
								weights.sort((a, b) => {
									return new Date(a.createdAt) - new Date(b.createdAt);
								})[0].load) *
							2.20462
						).toFixed(2)}
					</p>
				</div> */}

				<div className='wrapper'>
					<p className='figure'>
						<strong>
							{bandHeadlineGigsData && bandHeadlineGigsData.length < 10
								? `0${bandHeadlineGigsData.length}`
								: bandHeadlineGigsData.length}
						</strong>
					</p>
					<p className='stat-name'>Headline</p>
					{/* <p className='figure'>
						<strong>{bandFestivalCount}</strong>
					</p> */}
				</div>

				{/* <div className='wrapper-icon'>
					<p className='figure'>
						{(weights[weights.length - 1].load - target.target_weight).toFixed(
							2
						)}
					</p>
					{(weights[weights.length - 1].load - target.target_weight).toFixed(
						2
					) > 0 && <ImArrowRight className='arrow-icon red' />}
					{(weights[weights.length - 1].load - target.target_weight).toFixed(
						2
					) <= 0 && <FaCheck className='arrow-icon green' />}
					<p className='figure'>
						{(
							(weights[weights.length - 1].load - target.target_weight) *
							2.20462
						).toFixed(2)}

		
					</p>
				</div> */}

				<div className='wrapper'>
					<p className='figure'>
						<strong>
							{bandSupportGigsData.length && bandSupportGigsData.length < 10
								? `0${bandSupportGigsData.length}`
								: bandSupportGigsData.length}
						</strong>
					</p>
					<p className='stat-name'>Support</p>
					{/* <p className='figure'>
						<strong>{bandFestivalCount}</strong>
					</p> */}
				</div>

				<div className='wrapper'>
					<p className='figure'>
						<strong>
							{bandFestivalCount && bandFestivalCount < 10
								? `0${bandFestivalCount}`
								: bandFestivalCount}
						</strong>
					</p>
					<p className='stat-name'>Festivals</p>
					{/* <p className='figure'>
						<strong>{bandFestivalCount}</strong>
					</p> */}
				</div>
			</div>
			{/* <ProgressBarWidget percentage={percentage} /> */}
			{/* <div className='progress-bar-container'>
				<p>You have lost 20.30 Kgs</p>
				<progress value={percentage} max='100' className='progress' />
				<p>{percentage.toFixed(2)}% of goal reached</p>
			</div> */}

			{/* <div className='wrapper-icon'>
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div> */}
		</StyledBandCountRankWidget>
	);
};
const StyledBandCountRankWidget = styled.div`
	/* background: ${({ theme }) => theme.white};
	border-radius: 4px;
	padding: 1rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
	/* flex: 1; */
	.progress-widget-wrapper-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		column-gap: 0.5rem;

		/* justify-content: space-between; */
		/* justify-content: space-around; */
		.wrapper {
			background: ${({ theme }) => theme.white};
			border-radius: 4px;
			padding: 1rem 0.5rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			/* flex: 1 1 22%; */
			flex: 1;
			/* width: 90px; */
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
			p {
				text-align: center;
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 2rem;
				/* color: ${({ theme }) => theme.txtGrey}; */
				color: ${({ theme }) => theme.secondaryColor};
			}
			p.stat-name {
				margin: 0;
				font-size: 1rem;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
			}
		}
		.wrapper-icon {
			background: ${({ theme }) => theme.white};
			border-radius: 4px;
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			/* width: 100px; */
			row-gap: 0.2rem;
			p {
				text-align: center;
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 1rem;
				color: ${({ theme }) => theme.txtGrey};
			}
			.arrow-icon {
				font-size: 2rem;
			}
			.arrow-icon.green {
				color: ${({ theme }) => theme.primaryColor};
			}
			.arrow-icon.red {
				color: ${({ theme }) => theme.error};
			}
			/* p.stat-name {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
			} */
		}
	}
	/* .gig-widget-wrapper-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		column-gap: 1rem;
		.wrapper {
			display: flex;
			flex-direction: column;
			flex: 1;
			li {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				column-gap: 0.5rem;
			}
			p {
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.txtGrey};
				flex: 1;
				text-align: right;
			}
			p.stat-name {
				margin: 0;
				font-size: 1.6rem;
				color: ${({ theme }) => theme.secondaryColor};
				text-transform: uppercase;
			}
			p.stat-city-name {
				font-size: 1.4rem;
				color: ${({ theme }) => theme.txtDarkGrey};
				font-style: italic;
			}
		}
		.wrapper-icon {
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.arrow-icon {
				font-size: 3.5rem;
			}
			.arrow-icon.hand {
				font-size: 2.5rem;
			}
			.arrow-icon.green {
				color: ${({ theme }) => theme.primaryColor};
			}
			.arrow-icon.gold {
				color: ${({ theme }) => theme.gold};
			}

		}
	} */
`;

export default BandCountRankWidget;
