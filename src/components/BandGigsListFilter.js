import React from 'react';
import styled from 'styled-components';

const BandGigsListFilter = ({ bandGigListStatusHandler }) => {
	return (
		// <div className='filter-container'>
		<StyledBandGigsListFilter className='select'>
			<select
				name='todos'
				className='filter-gig'
				onChange={bandGigListStatusHandler}
			>
				<option value='all'>All</option>
				<option value='headline'>Headline</option>
				<option value='support'>Support</option>
			</select>
		</StyledBandGigsListFilter>
		// </div>
	);
};
const StyledBandGigsListFilter = styled.div`
text-align: right;
	select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0.5rem;
  /* color: #fff; */
  /* background-color: #9a9a9a; */
  background-image: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryColor};
  /* color: ${({ theme }) => theme.txtGrey}; */
		background-color: ${({ theme }) => theme.bgGrey};
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  width: 8em;
  height: 2em;
  border-radius: .25em;
  overflow: hidden;
  /* text-align: right; */
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  /* padding: 0.4em; */
  padding: 0.4em 0.6em;
  background-color: rgb(62, 61, 61);
  /* background-color: ${({ theme }) => theme.red}; */
  /* color: ${({ theme }) => theme.secondaryColor}; */
  transition: .25s all ease;
  /* pointer-events: none; */
}
/* Transition */
.select:hover::after {
  color: white;
}


 
`;

export default BandGigsListFilter;
