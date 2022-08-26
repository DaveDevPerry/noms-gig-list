// import { usegigsContext } from '../hooks/usegigsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { formatDistance } from 'date-fns';
import styled from 'styled-components';
import { BsFillShareFill, BsWhatsapp } from 'react-icons/bs';
import { format } from 'date-fns';
import { differenceInDays } from 'date-fns';
import { log } from '../helper';

const CountdownWidget = ({ gig }) => {
	log(gig, 'countdown widget gig');
	const shareMobile = () => {
		const nextBand = gig.headline_band;
		const nextVenue = gig.venue;
		const nextCity = gig.city;
		const nextDate = new Date(gig.gig_date).toLocaleDateString();

		log(
			`Liz and I are going to the ${nextBand} gig at ${nextVenue} in ${nextCity} on ${nextDate}. Will we see you there?`
		);

		window.open(
			`whatsapp://send?text=Liz and I are going to the ${nextBand} gig at ${nextVenue} in ${nextCity} on ${nextDate}. Will we see you there?`
		);
	};
	return (
		<StyledCountdownWidget className='countdown-widget'>
			{/* {!gig.deadline_reason && <p>No gig reason</p>} */}
			<button
				className='share-btn-whatsapp'
				onClick={() => {
					// playTile();
					shareMobile();
				}}
			>
				<BsFillShareFill size='20px' className='share-icon' />
				<div className='details-wrapper'>
					<p>{format(new Date(gig.gig_date), 'dd/MM/yyyy')}</p>
					{gig.headline_band && (
						<p className='band-title'>
							<strong>{gig.headline_band}</strong>
						</p>
					)}
					<p className='countdown-location'>
						{gig.venue}, {gig.city}
					</p>

					<p>in {differenceInDays(new Date(gig.gig_date), new Date())} days</p>
				</div>
				<BsWhatsapp size='25px' className='share-icon' />
			</button>
			{/* <div className="details-wrapper">

			<p>{format(new Date(gig.gig_date), 'dd/MM/yyyy')}</p>
			{gig.headline_band && (
				<p className='band-title'>
					<strong>{gig.headline_band}</strong>
				</p>
			)}

			<p>in {differenceInDays(new Date(gig.gig_date), new Date())} days</p>
			</div> */}
		</StyledCountdownWidget>
	);
};
const StyledCountdownWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	/* padding: 1rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: row;
	justify-content: center;
	/* row-gap: 0.5rem; */
	.share-btn-whatsapp {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* letter-spacing: 2px; */
		font-size: 1.6rem;
		padding: 1rem;
		background-color: ${({ theme }) => theme.white};
		border: none;
		border-radius: 5px;
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		cursor: pointer;
		/* padding: 0.2rem 1rem; */
		column-gap: 0.5rem;
		flex: 1;
		font-style: italic;
		.details-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			p {
				margin: 0;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: capitalize;
				text-align: center;
				font-weight: lighter;
				font-size: 1.4rem;
			}
			.band-title {
				text-transform: uppercase;
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 2rem;
			}
			.countdown-location {
				font-weight: bolder;
				/* flex-wrap: wrap; */
			}
		}
		.share-icon {
			color: ${({ theme }) => theme.green};
		}
	}
`;

export default CountdownWidget;
