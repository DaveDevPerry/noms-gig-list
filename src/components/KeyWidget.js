import React from 'react';
import styled from 'styled-components';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { GiCampingTent } from 'react-icons/gi';
// import { SiBandsintown } from 'react-icons/si';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import gigBarWidget from './gigBarWidget';

const KeyWidget = (
	{
		// bandWinner,
		// cityWinner,
		// venueWinner,
		// supportWinner,
	}
) => {
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
		<StyledKeyWidget className='key-widget'>
			{/* <div className='key-list-header'>
				<p>Key</p>
			</div> */}
			<h3>Key</h3>
			<ul className='key-widget-list'>
				<li>
					<div className='gig-icons-wrapper'>
						<GiCampingTent className='gig-icon' />
					</div>
					<p className='key-name'>festival gig</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<p>
							<strong>H</strong>
						</p>
					</div>
					<p className='key-name'>headline band</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<p>
							<strong>S</strong>
						</p>
					</div>
					<p className='key-name'>support band</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<p>
							<strong>T</strong>
						</p>
					</div>
					<p className='key-name'>total gigs</p>
				</li>
			</ul>
		</StyledKeyWidget>
	);
};
const StyledKeyWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	/* padding: 1rem 2rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	/* flex: 1; */
	h3 {
		text-align: center;
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
	}
	.key-list-header {
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
	}

	.key-widget-list {
		display: flex;
		flex-direction: column;
		flex: 1;
		/* row-gap: 0.5rem; */
		padding: 1rem;
		li {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			column-gap: 0.5rem;
			.gig-icons-wrapper {
				justify-content: center;
				align-items: center;
				display: flex;
				/* flex: 1; */
				/* text-align: right; */
				width: 2.4rem;
				.gig-icon {
					color: ${({ theme }) => theme.primaryColor};
					/* color: ${({ theme }) => theme.secondaryColor}; */
					/* font-size: 2rem; */
					font-size: 2.2rem;
				}
			}
			p {
				/* text-align: right; */
				/* color: ${({ theme }) => theme.txtGrey}; */
				font-size: 2rem;
				strong {
					color: ${({ theme }) => theme.secondaryColor};
					/* font-size: 1.8rem; */
				}
			}
			p.key-name {
				margin: 0;
				font-size: 1.6rem;
				/* color: ${({ theme }) => theme.secondaryColor}; */
				color: ${({ theme }) => theme.txtGrey};
				text-transform: capitalize;
				/* line-height: 0.8; */
			}
		}
	}
`;

export default KeyWidget;
