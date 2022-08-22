import React from 'react';
import styled from 'styled-components';
import { log } from '../helper';
// import { GiLaurelsTrophy } from 'react-icons/gi';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import gigBarWidget from './gigBarWidget';

const CityTotalWidget = ({ gigCounterData }) => {
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
		<StyledCityTotalWidget className='gig-widget'>
			<div className='gig-widget-wrapper-container'>
				<div className='wrapper'>
					<p className='figure'>
						<strong>
							{gigCounterData && gigCounterData.length < 10
								? `0${gigCounterData.length}`
								: gigCounterData.length}
						</strong>
						{/* <strong>
							{gigCounterData.previous_gig_count < 10
								? `0${gigCounterData.previous_gig_count}`
								: gigCounterData.previous_gig_count}
						</strong> */}
					</p>
					<p className='stat-name'>total cities</p>
				</div>
			</div>
		</StyledCityTotalWidget>
	);
};
const StyledCityTotalWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	padding: 0.5rem 1rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	.gig-widget-wrapper-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.wrapper {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			p {
				text-align: center;
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 2rem;
				color: ${({ theme }) => theme.secondaryColor};
			}
			p.stat-name {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
				font-weight: bold;
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
			.arrow-icon.green {
				color: ${({ theme }) => theme.primaryColor};
			}
			.arrow-icon.gold {
				color: ${({ theme }) => theme.gold};
			}
		}
	}
`;

export default CityTotalWidget;
