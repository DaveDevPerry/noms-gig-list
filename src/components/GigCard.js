// import { usegigsContext } from '../hooks/usegigsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
// import { ImArrowUp, ImArrowDown } from 'react-icons/im';

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';

import { GiCampingTent } from 'react-icons/gi';

const GigCard = ({ gig, difference }) => {
	// const { dispatch } = usegigsContext();
	// const { user } = useAuthContext();

	// const handleClick = async () => {
	// 	if (!user) {
	// 		// setError('You must be logged in');
	// 		return;
	// 	}

	// 	const response = await fetch('/api/gigs/' + gig._id, {
	// 		method: 'DELETE',
	// 		headers: {
	// 			Authorization: `Bearer ${user.token}`,
	// 		},
	// 	});
	// 	const json = await response.json();

	// 	if (response.ok) {
	// 		dispatch({ type: 'DELETE_gig', payload: json });
	// 	}
	// };

	return (
		<StyledGigCard className='gig-card'>
			<div>
				<p className='left'>{format(new Date(gig.gig_date), 'dd/MM/yyyy')}</p>
				{/* <p>
					{formatDistanceToNow(new Date(gig.gig_date), { addSuffix: true })}
				</p> */}
			</div>
			<div className='full'>
				<p>
					<strong>{gig.headline_band}</strong>
				</p>
				{/* <p>{gig.venue}</p> */}
			</div>
			{/* <p>{gig.gig_date}</p> */}
			<div>
				<p>{gig.venue}</p>
				{/* <p>
					{formatDistanceToNow(new Date(gig.gig_date), { addSuffix: true })}
				</p> */}
			</div>
			<div className='gig-icons-wrapper'>
				{gig.isFestival && gig.isFestival === true && (
					<GiCampingTent className='gig-icon' />
				)}
			</div>
			{/* <div className='gig-icons-wrapper'>
				{gig.isFestival && gig.isFestival === true ? (
					<GiCampingTent className='gig-icon' />
				) : (
					<p>no</p>
				)}
			</div> */}

			{/* <div className='gig-figures'>
				<p>
					<strong>{gig.headline_band}</strong>
				</p>
				<p>
					<strong>{gig.venue}</strong>
				</p>
			</div> */}
		</StyledGigCard>
	);
};
const StyledGigCard = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0.5rem 0; */
	padding: 0.5rem;
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
		/* flex: 1; */
		p {
			/* margin: 0;
		font-size: 0.8em;
		color: ${({ theme }) => theme.txtGrey}; */
			text-transform: uppercase;
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
	.gig-icons-wrapper {
		justify-content: flex-end;
		align-items: center;
		display: flex;
		flex: 1;
		text-align: right;
		.gig-icon {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 2rem;
		}
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
	.gig-figures {
		width: 8rem;
	}
	.right p {
		text-align: right;
	}
`;

export default GigCard;
