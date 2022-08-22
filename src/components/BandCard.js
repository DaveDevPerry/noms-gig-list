// import { usebandsContext } from '../hooks/usebandsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { log } from '../helper';
import { useStateContext } from '../lib/context';
// import Band from '../pages/Band';
// import { ImArrowUp, ImArrowDown } from 'react-icons/im';

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { format } from 'date-fns';

const BandCard = ({ band, difference }) => {
	const { setBandToView } = useStateContext();

	const navigate = useNavigate();
	// const { dispatch } = usebandsContext();
	// const { user } = useAuthContext();

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

	return (
		<StyledBandCard
			className='band-card'
			// onClick={setBandToView(band._id)}
			onClick={(e) => {
				e.preventDefault();
				log(band.key, 'band on click');
				setBandToView(band.key);
				navigate('/band');
			}}
		>
			{/* <div>
				<p className='left'>{format(new Date(band.band_date), 'dd/MM/yyyy')}</p>
				<p>
					{formatDistanceToNow(new Date(band.band_date), { addSuffix: true })}
				</p>
			</div> */}
			<div className='full'>
				<p>
					{/* <strong> */}
					{band.key}
					{/* {band.name} */}
					{/* </strong> */}
				</p>
			</div>
			<div className='right'>
				<p>
					{/* <strong> */}
					{band.value}
					{/* {band.name} */}
					{/* </strong> */}
				</p>
			</div>
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
	.right p {
		text-align: right;
		color: ${({ theme }) => theme.secondaryColor};
		font-size: 1.6rem;
	}
`;

export default BandCard;
