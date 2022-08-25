import React from 'react';
import styled from 'styled-components';
import { GiLaurelsTrophy } from 'react-icons/gi';
// import { SiBandsintown } from 'react-icons/si';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import gigBarWidget from './gigBarWidget';

const AllTopsWidget = ({ bandWinner, cityWinner }) => {
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
			<div className='gig-widget-wrapper-container'>
				<div className='wrapper-icon'>
					{/* <SiBandsintown className='arrow-icon hand gold' /> */}
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div>
				<ul className='wrapper'>
					<li>
						<p className='stat-name'>
							<strong>{bandWinner.bandName}</strong>
						</p>
						<p className='figure'>seen {bandWinner.totalGigCount} times</p>
					</li>
					<li>
						<p className='stat-name'>
							<strong>{cityWinner.key}</strong>
						</p>
						<p className='figure'>visited {cityWinner.value} times</p>
					</li>
				</ul>
				{/* <div className='wrapper'>
					<p className='stat-name'>
						<strong>
							{gigCounterData.key}
						</strong>
					</p>
					<p className='figure'>seen {gigCounterData.value} times</p>
				</div> */}
				<div className='wrapper-icon'>
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div>

				{/* <div className='wrapper-icon'>
					<p className='figure'>
						
						{(gigs[gigs.length - 1].load - target.target_weight).toFixed(
							2
						)}
						
					</p>
					{(gigs[gigs.length - 1].load - target.target_weight).toFixed(
						2
					) > 0 && <ImArrowRight className='arrow-icon red' />}
					{(gigs[gigs.length - 1].load - target.target_weight).toFixed(
						2
					) <= 0 && <FaCheck className='arrow-icon green' />}
					<p className='figure'>
						
						{(
							(gigs[gigs.length - 1].load - target.target_weight) *
							2.20462
						).toFixed(2)}

						
						
					</p>
				</div> */}
			</div>
			{/* <gigBarWidget percentage={percentage} /> */}
			{/* <div className='gig-bar-container'>
				<p>You have lost 20.30 Kgs</p>
				<gig value={percentage} max='100' className='gig' />
				<p>{percentage.toFixed(2)}% of goal reached</p>
			</div> */}
		</StyledAllTopsWidget>
	);
};
const StyledAllTopsWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem 2rem;
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
		/* justify-content: space-around; */
		.wrapper {
			/* background: ${({ theme }) => theme.white}; */
			/* border-radius: 4px; */
			/* padding: 0px; */
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			/* width: 90px; */
			li {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				column-gap: 1rem;
			}
			p {
				/* text-align: center; */
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.txtGrey};
			}
			p.stat-name {
				margin: 0;
				font-size: 1.6rem;
				color: ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.txtGrey}; */
				text-transform: uppercase;
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
				font-size: 0.8em;
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