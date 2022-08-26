import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FirstGigWidget = () => {
	return (
		<StyledFirstGigWidget>
			<h3>Getting started</h3>
			<p>Lets begin by adding a gig to your account.</p>
			<NavLink to='/gigs/new'>
				<button>add your first gig</button>
			</NavLink>
		</StyledFirstGigWidget>
	);
};
const StyledFirstGigWidget = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	justify-content: center;
	align-items: center;
	/* display: flex;
	flex-direction: column; */
	padding: 2rem;
	/* padding-bottom: 3rem; */
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	transition: all 200ms linear;
	h3 {
		text-align: center;
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
	}
	p {
		/* align-self: center; */
		/* margin-top: 6rem; */
		text-align: center;
		font-size: 1.6rem;
		color: ${({ theme }) => theme.txtGrey};
	}
	a {
		button {
			/* align-self: flex-end; */
			background: ${({ theme }) => theme.white};
			/* color: ${({ theme }) => theme.secondaryColor};
			border: 2px solid ${({ theme }) => theme.secondaryColor}; */
			color: ${({ theme }) => theme.primaryColor};
			border: 2px solid ${({ theme }) => theme.primaryColor};
			padding: 0.3rem 0.6rem;
			border-radius: 0.4rem;
			/* font-family: 'Poppins'; */
			cursor: pointer;
			font-size: 1em;
		}
	}
`;

export default FirstGigWidget;
