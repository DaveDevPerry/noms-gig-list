import React from 'react';
import styled from 'styled-components';
import { log } from '../helper';
// import { GiLaurelsTrophy } from 'react-icons/gi';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import gigBarWidget from './gigBarWidget';

const BandTotalWidget = ({ gigCounterData }) => {
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

	log(gigCounterData, 'gig counter data');

	return (
		<StyledBandTotalWidget className='gig-widget'>
			<div className='gig-widget-wrapper-container'>
				{/* <div className='wrapper-icon'>
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div> */}
				<div className='wrapper'>
					<p className='figure'>
						<strong>
							{gigCounterData.previous_gig_count < 10
								? `0${gigCounterData.previous_gig_count}`
								: gigCounterData.previous_gig_count}
							{/* terrorvision */}
							{/* {gigs
								.sort((a, b) => {
									return new Date(a.createdAt) - new Date(b.createdAt);
								})[0]
								.load.toFixed(2)} */}
						</strong>
						{/* <span> Kgs</span> */}
					</p>
					<p className='stat-name'>total gigs</p>
					{/* <p className='figure'>
						<strong>
							{(
								gigs.sort((a, b) => {
									return new Date(a.createdAt) - new Date(b.createdAt);
								})[0].load * 2.20462
							).toFixed(2)}
						</strong>
						<span> Lbs</span>
					</p> */}
				</div>
			</div>
			{/* <gigBarWidget percentage={percentage} /> */}
			{/* <div className='gig-bar-container'>
				<p>You have lost 20.30 Kgs</p>
				<gig value={percentage} max='100' className='gig' />
				<p>{percentage.toFixed(2)}% of goal reached</p>
			</div> */}
		</StyledBandTotalWidget>
	);
};
const StyledBandTotalWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 0.5rem 1rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

	/* display: flex; */
	/* flex-direction: column; */
	/* align-items: center; */
	/* justify-content: center; */
	/* flex: 1; */
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
				font-size: 1.4rem;
				/* color: ${({ theme }) => theme.secondaryColor}; */
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
				font-weight: bold;
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

export default BandTotalWidget;
