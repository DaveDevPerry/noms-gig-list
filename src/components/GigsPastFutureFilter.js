import React from 'react';
import styled from 'styled-components';

const GigsPastFutureFilter = ({ setCurrentFormOpen, handleFormChoice }) => {
	return (
		<StyledGigsPastFutureFilter>
			<button
				onClick={(e) => {
					handleFormChoice('create');
				}}
			>
				UPCOMING
			</button>
			<button
				onClick={(e) => {
					handleFormChoice('join');
				}}
			>
				HISTORY
			</button>

			{/* <button onClick={setCurrentFormOpen('join')}>JOIN</button> */}
			{/* <button onClick={setCurrentFormOpen('create')}>CREATE</button>
			<button onClick={setCurrentFormOpen('join')}>JOIN</button> */}
			{/* <button onClick={handleClick}>Log out</button> */}
		</StyledGigsPastFutureFilter>
	);
};
const StyledGigsPastFutureFilter = styled.div`
	/* background: ${({ theme }) => theme.white}; */
	/* border-radius: 4px; */
	/* margin: 0.5rem 0; */
	/* padding: 1rem; */
	/* position: relative; */
	/* box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05); */
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
	button {
		/* align-self: flex-end; */
		background: ${({ theme }) => theme.white};
		color: ${({ theme }) => theme.secondaryColor};
		border: none;
		/* color: ${({ theme }) => theme.primaryColor};
			border: 2px solid ${({ theme }) => theme.primaryColor}; */
		padding: 0.3rem 0.6rem;
		border-radius: 0.4rem;
		/* font-family: 'Poppins'; */
		cursor: pointer;
		font-size: 1em;
		flex: 1;
	}
`;

export default GigsPastFutureFilter;
