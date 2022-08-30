import React from 'react';
import styled from 'styled-components';

import { GiLaurelsTrophy } from 'react-icons/gi';
import { useStateContext } from '../lib/context';

const BandHeader = () => {
	const { bandToView } = useStateContext();
	return (
		<StyledBandHeader>
			<div className='gig-widget-wrapper-container'>
				<div className='wrapper-icon'>
					{/* <SiBandsintown className='arrow-icon hand gold' /> */}
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div>
				<div className='wrapper'>
					<p className='stat-name'>
						<strong>{bandToView}</strong>
						{/* <span> Kgs</span> */}
					</p>
					{/* <p className='figure'>
						seen <strong>{gigCounterData.totalGigCount}</strong> times
					</p> */}
				</div>

				<div className='wrapper-icon'>
					<GiLaurelsTrophy className='arrow-icon gold' />
				</div>

				{/* <div className='wrapper-icon'>
					<p className='figure'>
						
						{(gigs[gigs.length - 1].load - target.target_weight).toFixed(
							2
						)}
						
					</p>
					{(gigs[gigs.length - 1].load - target.target_weight).toFixed(
						2
					) > 0 && <ImArrowRight className='arrow-icon red' />}
					{(gigs[gigs.length - 1].load - target.target_weight).toFixed(
						2
					) <= 0 && <FaCheck className='arrow-icon green' />}
					<p className='figure'>
						
						{(
							(gigs[gigs.length - 1].load - target.target_weight) *
							2.20462
						).toFixed(2)}

						
						
					</p>
				</div> */}
			</div>
		</StyledBandHeader>
	);
};
const StyledBandHeader = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 0.5rem 2rem;
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
		/* justify-content: space-around; */
		.wrapper {
			/* background: ${({ theme }) => theme.white}; */
			/* border-radius: 4px; */
			/* padding: 0px; */
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			/* width: 90px; */
			p {
				text-align: center;
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 1.4rem;
				color: ${({ theme }) => theme.txtGrey};
				strong {
					font-size: 1.6rem;
				}
			}
			p.stat-name {
				margin: 0;
				font-size: 1.6rem;
				color: ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.txtGrey}; */
				text-transform: uppercase;
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
				font-size: 1.4rem;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
			} */
		}
	}
`;

export default BandHeader;
