// import { usebandsContext } from '../hooks/usebandsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { log } from '../helper';
import { useAuthContext } from '../hooks/useAuthContext';
import { useBandsContext } from '../hooks/useBandsContext';
import { useStateContext } from '../lib/context';
// import Band from '../pages/Band';
// import { ImArrowUp, ImArrowDown } from 'react-icons/im';

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { format } from 'date-fns';

const BandCard = ({ band, difference }) => {
	const { setBandToView, getBandsTopStats } = useStateContext();

	const navigate = useNavigate();
	const { dispatch } = useBandsContext();
	const { user } = useAuthContext();

	// const handleClick = async () => {
	// 	if (!user) {
	// 		// setError('You must be logged in');
	// 		return;
	// 	}

	// 	const response = await fetch('/api/bands/' + band._id, {
	// 		method: 'DELETE',
	// 		headers: {
	// 			Authorization: `Bearer ${user.token}`,
	// 		},
	// 	});
	// 	const json = await response.json();

	// 	if (response.ok) {
	// 		dispatch({ type: 'DELETE_band', payload: json });
	// 	}
	// };

	// fetch selected bands gigs
	const getAllBandsGigs = async (bandName) => {
		// e.preventDefault();
		log(bandName, 'band name in function');

		setBandToView(bandName);
		const chosenBand = bandName;
		log(chosenBand, 'chosenBand name in function');

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
			{
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();
		log(json, 'json in band card');
		const clonedData = [...json];
		const bandData = clonedData.filter(
			(obj) =>
				obj.headline_band === chosenBand || obj.support_band === chosenBand
		);
		log(bandData, 'band data in band card');
		if (response.ok) {
			dispatch({
				type: 'SET_BAND',
				payload: bandData,
			});
			getBandsTopStats(bandData, chosenBand);
			navigate('/band');
		}

		// const fetchGigCounterData = async () => {
		// 	const response = await fetch(
		// 		`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
		// 		{
		// 			headers: {
		// 				Authorization: `Bearer ${user.token}`,
		// 			},
		// 		}
		// 	);
		// 	const json = await response.json();
		// 	if (response.ok) {
		// 		dispatch({
		// 			type: 'SET_GIG_COUNTER_DATA',
		// 			payload: json,
		// 		});
		// 	}
	};
	// if we have a value for the user then fetch the workouts
	// if (user) {
	// 	fetchGigCounterData();
	// }

	// navigate('/band');
	// }

	return (
		<StyledBandCard
			className='band-card'
			onClick={() => {
				// e.preventDefault();
				// log(band.bandName, 'band on click');
				// setBandToView(band.bandName);
				// navigate('/band');
				getAllBandsGigs(band.bandName);
			}}
			// onClick={(e) => {
			// 	e.preventDefault();
			// 	log(band.bandName, 'band on click');
			// 	setBandToView(band.bandName);
			// 	navigate('/band');
			// }}
		>
			{/* <div>
				<p className='left'>{format(new Date(band.band_date), 'dd/MM/yyyy')}</p>
				<p>
					{formatDistanceToNow(new Date(band.band_date), { addSuffix: true })}
				</p>
			</div> */}
			<div className='full'>
				<p>{band.bandName}</p>
			</div>
			<div className='band-counts-container'>
				<div className='counter'>
					<p className='mono-font'>
						<strong>H</strong>
						{band.headlineCount < 10
							? `0${band.headlineCount}`
							: band.headlineCount}
					</p>
				</div>
				<div className='counter'>
					<p className='mono-font'>
						<strong>S</strong>
						{band.supportCount < 10
							? `0${band.supportCount}`
							: band.supportCount}
					</p>
				</div>
				<div className='counter'>
					<p className='mono-font'>
						<strong>T</strong>
						{band.totalGigCount < 10
							? `0${band.totalGigCount}`
							: band.totalGigCount}
					</p>
				</div>
			</div>

			{/* <div className='full'>
				<p>
					{band.bandName}
				</p>
			</div>
			<div className='right'>
				<p>
					{band.value}
				</p>
			</div> */}

			{/* <Band band={band} /> */}
			{/* <p>{band.band_date}</p> */}
			{/* <div>
				<p>{band.venue}</p>
				<p>
					{formatDistanceToNow(new Date(band.band_date), { addSuffix: true })}
				</p>
			</div> */}

			{/* <div className='band-figures'>
				<p>
					<strong>{band.headline_band}</strong>
				</p>
				<p>
					<strong>{band.venue}</strong>
				</p>
			</div> */}
		</StyledBandCard>
	);
};
const StyledBandCard = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0.5rem 0; */
	padding: 0.5rem 1rem;
	position: relative;
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	column-gap: 1rem;

	p {
		margin: 0;
		font-size: 0.8em;
		color: ${({ theme }) => theme.txtGrey};
		text-transform: capitalize;
		/* &:first-child {
		} */
		&.left {
			width: 8rem;
		}
	}
	.full {
		flex: 1;
		p {
			/* margin: 0;
		font-size: 0.8em;
		color: ${({ theme }) => theme.txtGrey}; */
			text-transform: capitalize;
			font-size: 0.9em;
			width: unset;
		}
	}
	.band-counts-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 1rem;
		/* flex: 1; */
	}
	span {
		display: none;
		position: absolute;
		top: 1.2rem;
		right: 2rem;
		cursor: pointer;
		background: ${({ theme }) => theme.bgGrey};
		padding: 0.6rem;
		border-radius: 50%;
		color: ${({ theme }) => theme.txtDarkGrey};
	}
	.wrapper-icon {
		background: ${({ theme }) => theme.white};
		border-radius: 4px;
		padding: 0px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/* width: 100px; */
		column-gap: 0.8rem;
		p {
			text-align: right;
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
	.band-figures {
		width: 8rem;
	}
	.counter {
		flex: 1;
		p {
			text-align: right;
			color: ${({ theme }) => theme.txtGrey};
			font-size: 0.7em;
			/* font-size: 0.9em; */

			strong {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 1.6rem;
				/* font-size: 0.9em; */
			}
		}
	}
`;

export default BandCard;
