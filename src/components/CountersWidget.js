import React from 'react';
import styled from 'styled-components';
// import { GiLaurelsTrophy } from 'react-icons/gi';
import { useStateContext } from '../lib/context';
// import { SiBandsintown } from 'react-icons/si';
import { GiCampingTent, GiGuitar } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';

const CountersWidget = ({ gigCounterData }) => {
	const { totalBandCount, totalFestivalCount } = useStateContext();

	return (
		<StyledCountersWidget className='gig-widget'>
			{/* <SiBandsintown className='arrow-icon hand gold' /> */}
			<div className='progress-widget-wrapper-container'>
				<div className='wrapper'>
					<div className='figure-wrapper'>
						<GiGuitar className='guitar-icon' />
						<p className='figure'>
							<strong>
								{gigCounterData && gigCounterData.previous_gig_count < 10
									? `0${gigCounterData.previous_gig_count}`
									: gigCounterData.previous_gig_count}
							</strong>
						</p>
					</div>
					<p className='stat-name'>Gigs attended</p>
				</div>
				<div className='wrapper'>
					<div className='figure-wrapper'>
						<FaUsers className='band-icon' />
						<p className='figure'>
							<strong>
								{totalBandCount && totalBandCount < 10
									? `0${totalBandCount}`
									: totalBandCount}
							</strong>
						</p>
					</div>
					<p className='stat-name'>Bands seen</p>
				</div>
				<div className='wrapper'>
					<div className='figure-wrapper'>
						<GiCampingTent className='festival-icon' />
						<p className='figure'>
							<strong>
								{totalFestivalCount && totalFestivalCount < 10
									? `0${totalFestivalCount}`
									: totalFestivalCount}
							</strong>
						</p>
					</div>
					<p className='stat-name'>Festival days</p>
				</div>
			</div>
		</StyledCountersWidget>
	);
};
const StyledCountersWidget = styled.div`
	.progress-widget-wrapper-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		column-gap: 0.5rem;
		.wrapper {
			background: ${({ theme }) => theme.white};
			border-radius: 4px;
			padding: 0.5rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
			p {
				text-align: center;
				margin: 0;
			}
			.figure-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				column-gap: 1rem;
				.guitar-icon {
					color: ${({ theme }) => theme.blue};
					font-size: 2rem;
				}
				.band-icon {
					color: ${({ theme }) => theme.red};
					font-size: 2rem;
				}
				.festival-icon {
					color: ${({ theme }) => theme.green};
					font-size: 2.5rem;
				}

				p.figure {
					margin: 0;
					font-size: 2rem;
					color: ${({ theme }) => theme.secondaryColor};
				}
			}

			p.stat-name {
				margin: 0;
				font-size: 1rem;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
			}
		}
		.wrapper-icon {
			background: ${({ theme }) => theme.white};
			border-radius: 4px;
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			row-gap: 0.2rem;
			p {
				text-align: center;
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
		}
	}
`;

export default CountersWidget;
