import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import BandGigCard from './BandGigCard';
// import GigDetails from './GigDetails';

const BandSupportGigsList = ({ gigs }) => {
	// const [testgigs, setTestgigs] = useState('');
	// // const weightDiffs = [];
	// useEffect(() => {
	// 	const clonedWeights = [...weights];
	// 	// clonedWeights.reverse();
	// 	// log(clonedWeights, 'cloned reversed');
	// 	const weightDiffs = [];

	// 	for (let i = 0; i < clonedWeights.length - 1; i++) {
	// 		const diff = clonedWeights[i].load - clonedWeights[i + 1].load;
	// 		// const diff = clonedWeights[i + 1].load - clonedWeights[i].load;
	// 		weightDiffs.push(diff.toFixed(2));
	// 		// weightDiffs.unshift(diff.toFixed(2));
	// 	}
	// 	setTestWeights(weightDiffs);
	// 	log(clonedWeights, 'cloned');
	// 	log(weightDiffs, 'weight diffs');
	// }, [weights]);
	return (
		<StyledBandSupportGigsList className='gig-list-container'>
			{/* <p className='gigs-list-header'>Recorded weigh-ins</p> */}
			<div className='gigs-list'>
				{gigs &&
					gigs.map((gig, index) => (
						<BandGigCard key={gig._id} gig={gig} showGigLetter={false} />
					))}
			</div>
		</StyledBandSupportGigsList>
	);
};
const StyledBandSupportGigsList = styled.div`
	/* overflow-y: scroll; */
	overflow-y: auto;
	flex: 1;
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.primaryColor};
	::-webkit-scrollbar {
		/* height: 12px !important; */
		width: 5px;
		background: rgb(75, 74, 74);
		user-select: none; /* supported by Chrome and Opera */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}
	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}
	p.gigs-list-header {
		padding: 0 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 1.6rem;
	}
	.gigs-list {
		/* border: 2px solid blue; */
		display: flex;
		flex-direction: column;
		flex: 1;
		row-gap: 0.3rem;
		/* overflow-y: auto; */
		/* overflow-y: hidden; */
		/* overflow-y: scroll; */
	}
`;

export default BandSupportGigsList;
