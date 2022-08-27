import React from 'react';
import styled from 'styled-components';
// import { GiLaurelsTrophy } from 'react-icons/gi';
import { log } from '../helper';
import { useStateContext } from '../lib/context';
import { useBandsContext } from '../hooks/useBandsContext';
// import { SiBandsintown } from 'react-icons/si';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import gigBarWidget from './gigBarWidget';

const BandAllTopsWidget = ({
	bandWinner,
	cityWinner,
	venueWinner,
	supportWinner,
	// bandWinnersStats,
}) => {
	const { currentCityCount } = useBandsContext();
	const { bandWinnersStats } = useStateContext();
	log(bandWinnersStats, 'bandWinnersStats in band all tops widget');
	return (
		<StyledBandAllTopsWidget className='gig-widget'>
			{/* <SiBandsintown className='arrow-icon hand gold' /> */}
			<div className='gig-widget-wrapper-container'>
				{/* <div className='wrapper-icon'>
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div> */}
				<ul className='wrapper'>
					{/* <li>
						<p className='stat-name'>
							<strong>{bandWinner.bandName}</strong>
						</p>
						<p className='stat-city-name'>headline</p>
						<p className='figure'>{bandWinner.totalGigCount} gigs</p>
					</li>

					<li>
						<p className='stat-name'>
							<strong>{supportWinner.bandName}</strong>
						</p>
						<p className='stat-city-name'>support</p>
						<p className='figure'>{supportWinner.supportCount} gigs</p>
					</li> */}
					<li>
						<p className='stat-name'>
							<strong>{bandWinnersStats.topVenue.venueName}</strong>
						</p>
						<p className='stat-city-name'>
							{bandWinnersStats.topVenue.cityName}
						</p>
						<p className='figure'>
							{bandWinnersStats.topVenue.venueCount} gigs
						</p>
					</li>
					<li>
						<p className='stat-name'>
							<strong>{currentCityCount[0].key}</strong>
						</p>
						{/* <p className='stat-city-name'>
							{bandWinnersStats.topVenue.cityName}
						</p> */}
						<p className='figure'>{currentCityCount[0].value} gigs</p>
					</li>
					{/* <li>
						<p className='stat-name'>
							<strong>{cityWinner.key}</strong>
						</p>
						<p className='figure'>{cityWinner.value} gigs</p>
					</li> */}
				</ul>

				{/* <div className='wrapper-icon'>
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div> */}
			</div>
		</StyledBandAllTopsWidget>
	);
};
const StyledBandAllTopsWidget = styled.div`
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
	/* flex: 1; */
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
				font-size: 0.8em;
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
			.arrow-icon {
				font-size: 2rem;
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

export default BandAllTopsWidget;
