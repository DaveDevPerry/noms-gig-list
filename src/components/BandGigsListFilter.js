import React from 'react';
import styled from 'styled-components';

const BandGigsListFilter = ({ bandGigListStatusHandler }) => {
	return (
		// <div className='filter-container'>
		<StyledBandGigsListFilter className='custom-select'>
			<select
				// name='todos'
				// className='filter-gig'
				onChange={bandGigListStatusHandler}
			>
				<option value='all'>All Gigs</option>
				<option value='headline'>Headline</option>
				<option value='support'>Support</option>
			</select>
		</StyledBandGigsListFilter>
		// </div>
	);
};
const StyledBandGigsListFilter = styled.div`

/* border: 2px solid green; */
/* width: 12rem;
height: 3rem;
position: relative;
display: flex;
border-radius: 5px;
  overflow: hidden; */
  width: 12rem;
/* height: 3rem; */
position: relative;

	select {
  /* Reset Select */
  /* appearance: none; */
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0.2rem 1rem 0.2rem 0;
  /* padding: 0.2rem 0.5rem; */
  color: #fff;
  color: ${({ theme }) => theme.secondaryColor};
  /* background-color: #9a9a9a; */
  background-color: ${({ theme }) => theme.bgGrey};
  background-image: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  /* color: ${({ theme }) => theme.txtGrey}; */
  /* option{
    font-weight: bolder;
    color: green;
  } */
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
&.custom-select {
  /* border: 2px solid green; */
width: 12rem;
height: 3rem;
position: relative;
display: flex;
border-radius: 5px;
  overflow: hidden;
  /* position: relative;
  display: flex;
  width: 8em;
  height: 2em;
  border-radius: .25em;
  overflow: hidden; */

}
/* Arrow */
&.custom-select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;

  /* padding: 0.4em 0.6em; */
  /* background-color: rgb(62, 61, 61); */
  /* background-color: ${({ theme }) => theme.red}; */
  color: ${({ theme }) => theme.secondaryColor};
  transition: 1s all ease;
  /* pointer-events: none; */
}
/* Transition */
&.custom-select:hover::after {
  color: white;
  /* background-color: green; */
}

/* option:hover{ */
  /* cursor:pointer; */
  /* font-weight: unset; */
  /* font-size: 1.6rem; */
  /* padding: 1rem;
  margin: 2rem; */
    /* font-weight: bold; */
    /* color: green; */
    /* &:hover{
      background-color: pink;
    } */
  /* } */
 
`;

export default BandGigsListFilter;
