import styled from 'styled-components';
import { BsFillShareFill, BsWhatsapp } from 'react-icons/bs';
import { intlFormatDistance } from 'date-fns';
import { log } from '../helper';

const CountdownWidget = ({ gig }) => {
	log(gig, 'countdown widget gig');
	const shareMobile = () => {
		const nextBand = gig.headline_band;
		const nextVenue = gig.venue;
		const nextCity = gig.city;
		const nextDate = new Date(gig.gig_date).toLocaleDateString();

		log(
			`I'm going to the ${nextBand} gig at ${nextVenue} in ${nextCity} on ${nextDate}. Will I see you there?`
		);

		window.open(
			`whatsapp://send?text=I'm going to the ${nextBand} gig at ${nextVenue} in ${nextCity} on ${nextDate}. Will I see you there?`
		);
	};
	return (
		<StyledCountdownWidget className='countdown-widget'>
			<button
				className='share-btn-whatsapp'
				onClick={() => {
					shareMobile();
				}}
			>
				<BsFillShareFill size='20px' className='share-icon' />
				<div className='details-wrapper'>
					<p className='header-time'>
						<strong>
							{intlFormatDistance(
								new Date(new Date(gig.gig_date).toDateString()),
								new Date(new Date(new Date().toDateString())),
								{
									numeric: 'auto',
								}
							)}
						</strong>
					</p>
					{gig.headline_band && (
						<p className='band-title'>
							<strong>{gig.headline_band}</strong>
						</p>
					)}
					<p className='header-location'>
						<span>
							<strong>{gig.venue}</strong>
						</span>
						<span>{gig.city}</span>
					</p>
					<p className='header-date'>
						{new Date(gig.gig_date).toLocaleDateString('en-us', {
							weekday: 'long',
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})}
					</p>
				</div>
				<BsWhatsapp size='25px' className='share-icon' />
			</button>
		</StyledCountdownWidget>
	);
};
const StyledCountdownWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: row;
	justify-content: center;
	.share-btn-whatsapp {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 1.6rem;
		padding: 1rem;
		background-color: ${({ theme }) => theme.white};
		border: none;
		border-radius: 5px;
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		cursor: pointer;
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
			.header-time {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 1.4rem;
				color: ${({ theme }) => theme.txtGrey};
			}
			.band-title {
				text-transform: uppercase;
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 2rem;
			}
			.header-location {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 1.4rem;
				color: ${({ theme }) => theme.txtGrey};
				span {
					text-transform: capitalize;
					strong {
						font-size: 1.5rem;
					}
				}
			}
			.header-date {
				font-size: 1.4rem;
				font-style: italic;
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
		.share-icon {
			color: ${({ theme }) => theme.green};
		}
	}
`;

export default CountdownWidget;
