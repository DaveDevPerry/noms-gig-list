import React from 'react';
import styled from 'styled-components';
// import { GiLaurelsTrophy } from 'react-icons/gi';
// import { SiBandsintown } from 'react-icons/si';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import gigBarWidget from './gigBarWidget';

const AllTopsWidget = ({
	bandWinner,
	cityWinner,
	venueWinner,
	supportWinner,
}) => {
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
		<StyledAllTopsWidget className='gig-widget'>
			{/* <SiBandsintown className='arrow-icon hand gold' /> */}
			<div className='gig-widget-wrapper-container'>
				{/* <div className='wrapper-icon'>
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div> */}
				<ul className='wrapper'>
					{/* {bandWinner.length >= 0 && (
						<li>
							<p className='stat-name'>
								<strong>{bandWinner.bandName}</strong>
							</p>
							<p className='stat-city-name'>headline</p>
							<p className='figure'>{bandWinner.totalGigCount} gigs</p>
						</li>
					)} */}
					<li>
						<p className='stat-name'>
							<strong>{bandWinner.bandName}</strong>
						</p>
						<p className='stat-city-name'>headline</p>
						<p className='figure'>{bandWinner.totalGigCount} gigs</p>
					</li>
					{/* {supportWinner.length >= 0 && (
						<li>
							<p className='stat-name'>
								<strong>{supportWinner.bandName}</strong>
							</p>
							<p className='stat-city-name'>support</p>
							<p className='figure'>{supportWinner.supportCount} gigs</p>
						</li>
					)}
					{venueWinner.length >= 0 && (
						<li>
							<p className='stat-name'>
								<strong>{venueWinner.venueName}</strong>
							</p>
							<p className='stat-city-name'>{venueWinner.cityName}</p>
							<p className='figure'>{venueWinner.venueCount} gigs</p>
						</li>
					)}
					{cityWinner.length >= 0 && (
						<li>
							<p className='stat-name'>
								<strong>{cityWinner.key}</strong>
							</p>
							<p className='figure'>{cityWinner.value} gigs</p>
						</li>
					)} */}
					<li>
						<p className='stat-name'>
							<strong>{supportWinner.bandName}</strong>
						</p>
						<p className='stat-city-name'>support</p>
						<p className='figure'>{supportWinner.supportCount} gigs</p>
					</li>
					<li>
						<p className='stat-name'>
							<strong>{venueWinner.venueName}</strong>
						</p>
						<p className='stat-city-name'>{venueWinner.cityName}</p>
						<p className='figure'>{venueWinner.venueCount} gigs</p>
					</li>
					<li>
						<p className='stat-name'>
							<strong>{cityWinner.key}</strong>
						</p>
						<p className='figure'>{cityWinner.value} gigs</p>
					</li>
				</ul>

				{/* <div className='wrapper-icon'>
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div> */}
			</div>
		</StyledAllTopsWidget>
	);
};
const StyledAllTopsWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	/* padding: 1rem 2rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

	/* display: flex; */
	/* flex-direction: column; */
	/* align-items: center; */
	/* justify-content: center; */
	flex: 1;
	/* row-gap: 1rem; */
	.gig-widget-wrapper-container {
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: space-between;
		column-gap: 1rem;
		/* justify-content: space-around; */
		.wrapper {
			/* background: ${({ theme }) => theme.white}; */
			/* border-radius: 4px; */
			/* padding: 0px; */
			display: flex;
			flex-direction: column;
			/* justify-content: space-between; */
			/* width: 90px; */
			flex: 1;
			li {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				column-gap: 0.5rem;
			}
			p {
				/* text-align: center; */
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 1.4rem;
				color: ${({ theme }) => theme.txtGrey};
				flex: 1;
				text-align: right;
				/* font-weight: bold; */
			}
			p.stat-name {
				margin: 0;
				font-size: 1.6rem;
				color: ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.txtGrey}; */
				text-transform: uppercase;
				/* line-height: 0.8; */
			}
			p.stat-city-name {
				font-size: 1.4rem;
				color: ${({ theme }) => theme.txtDarkGrey};
				font-style: italic;
			}
		}
		.wrapper-icon {
			/* background: ${({ theme }) => theme.bgGrey}; */
			/* border-radius: 4px; */
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			/* width: 100px; */
			/* row-gap: 0.2rem; */
			/* p {
				text-align: center;
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 1rem;
				color: ${({ theme }) => theme.txtGrey};
			} */
			/* dfgd */
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
			/* p.stat-name {
				margin: 0;
				font-size: 1.4rem;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
			} */
		}
	}

	/* .gig-bar-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 0 1rem;
		p {
			margin: 0;
		}
		gig[value] {
			width: 100%;
			appearance: none;
			::-webkit-gig-bar {
				height: 100%;
				border-radius: 5px;
				background-color: ${({ theme }) => theme.bgGrey};
				border: 1px solid ${({ theme }) => theme.txtDarkGrey};
				width: 100%;
			}
			::-webkit-gig-value {
				height: 100%;
				border-radius: 4px;
				background-color: ${({ theme }) => theme.primaryColor};
			}
		}
	} */
`;

export default AllTopsWidget;
