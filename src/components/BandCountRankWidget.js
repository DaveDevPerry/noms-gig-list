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
import { GiCampingTent, GiGuitar } from 'react-icons/gi';
import { ImMenu3 } from 'react-icons/im';
// import { ImArrowUp } from 'react-icons/im';
import { HiStar } from 'react-icons/hi';
// import { useBandsContext } from '../hooks/useBandsContext';
import { log } from '../helper';

const BandCountRankWidget = ({
	bandWinner,
	cityWinner,
	venueWinner,
	supportWinner,
	bandCounterData,
	bandFestivalCount,
}) => {
	const { bandHeadlineGigsData, bandSupportGigsData } = useStateContext();
	// const { currentFestivalCount } = useBandsContext();
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

	log(bandCounterData, 'band counter data - count rank widget');
	log(bandFestivalCount, 'bandFestivalCount - count rank widget');

	return (
		<StyledBandCountRankWidget className='gig-widget'>
			{/* <SiBandsintown className='arrow-icon hand gold' /> */}
			<div className='progress-widget-wrapper-container'>
				<div className='wrapper'>
					<div className='figure-wrapper'>
						<GiGuitar className='guitar-icon' />
						<p className='figure'>
							<strong>
								{bandCounterData &&
								bandCounterData.length &&
								bandCounterData.length < 10
									? `0${bandCounterData.length}`
									: bandCounterData.length}
							</strong>
						</p>
					</div>
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

				{bandHeadlineGigsData.length && bandHeadlineGigsData.length > 0 && (
					<div className='wrapper'>
						<div className='figure-wrapper'>
							{/* <ImArrowUp className='headline-icon' /> */}
							<HiStar className='star-icon' />
							<p className='figure'>
								<strong>
									{bandHeadlineGigsData && bandHeadlineGigsData.length < 10
										? `0${bandHeadlineGigsData.length}`
										: bandHeadlineGigsData.length}
								</strong>
							</p>
						</div>
						<p className='stat-name'>Headline</p>
						{/* <p className='figure'>
						<strong>{bandFestivalCount}</strong>
					</p> */}
					</div>
				)}
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

				{/* {bandSupportGigsData.length && bandSupportGigsData.length > 0 && ( */}
				{bandSupportGigsData && !bandSupportGigsData.length && (
					<div className='wrapper'>
						<div className='figure-wrapper'>
							<ImMenu3 className='support-icon' />
							{/* <GiGuitar className='guitar-icon' /> */}
							<p className='figure'>
								<strong>
									{bandSupportGigsData.length && bandSupportGigsData.length < 10
										? `0${bandSupportGigsData.length}`
										: bandSupportGigsData.length}
								</strong>
							</p>
						</div>
						<p className='stat-name'>Support</p>
						{/* <p className='figure'>
						<strong>{bandFestivalCount}</strong>
					</p> */}
					</div>
				)}

				{/* {bandFestivalCount &&
					currentFestivalCount &&
					currentFestivalCount === 0 && (
						<div className='wrapper'>
							<div className='figure-wrapper'>
								<GiCampingTent className='festival-icon' />
								<p className='figure'>
									<strong>
										{currentFestivalCount && currentFestivalCount < 10
											? `0${currentFestivalCount}`
											: currentFestivalCount}
									</strong>
								</p>
							</div>
							<p className='stat-name'>Festivals</p>
						</div>
					)} */}
				{bandFestivalCount && bandFestivalCount > 0 && (
					<div className='wrapper'>
						<div className='figure-wrapper'>
							<GiCampingTent className='festival-icon' />
							<p className='figure'>
								<strong>
									{bandFestivalCount && bandFestivalCount < 10
										? `0${bandFestivalCount}`
										: bandFestivalCount}
								</strong>
							</p>
						</div>
						<p className='stat-name'>Festivals</p>
					</div>
				)}
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
			.figure-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				column-gap: 1rem;
				.guitar-icon {
					color: ${({ theme }) => theme.blue};
					font-size: 2rem;
				}
				.headline-icon {
					color: ${({ theme }) => theme.red};
					font-size: 2rem;
				}
				.star-icon {
					color: ${({ theme }) => theme.gold};
					font-size: 2.4rem;
				}
				.support-icon {
					color: ${({ theme }) => theme.red};
					font-size: 2.4rem;
				}
				.festival-icon {
					color: ${({ theme }) => theme.green};
					font-size: 2.5rem;
				}

				p.figure {
					margin: 0;
					font-size: 2rem;
					color: ${({ theme }) => theme.secondaryColor};
				}
			}
			/* p.figure {
				margin: 0;
				font-size: 2rem;
				color: ${({ theme }) => theme.secondaryColor};
			} */
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
				font-size: 1.4rem;
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
				font-size: 1.4rem;
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
