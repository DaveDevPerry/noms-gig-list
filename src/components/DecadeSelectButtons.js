import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
// import { log } from '../helper';

const DecadeSelectButtons = ({ handleDecadeClick }) => {
	// const handleDecadeClick = (e) => {
	// 	log(e.target, e.target.innerText, 'handle decade click');
	// };

	const [decadeActive, setDecadeActive] = useState('20');
	return (
		<StyledDecadeSelectButtons>
			<div
				className={decadeActive === '20' ? 'decade-btn active' : 'decade-btn'}
				onClick={(e) => {
					setDecadeActive('20');
					handleDecadeClick(e);
				}}
				data-decade='20'
			>
				20's
			</div>
			<div
				className={decadeActive === '10' ? 'decade-btn active' : 'decade-btn'}
				// onClick={handleDecadeClick}
				onClick={(e) => {
					setDecadeActive('10');
					handleDecadeClick(e);
				}}
				data-decade='10'
			>
				10's
			</div>
			<div
				className={decadeActive === '00' ? 'decade-btn active' : 'decade-btn'}
				// onClick={handleDecadeClick}
				onClick={(e) => {
					setDecadeActive('00');
					handleDecadeClick(e);
				}}
				data-decade='00'
			>
				00's
			</div>
			<div
				className={decadeActive === '90' ? 'decade-btn active' : 'decade-btn'}
				// onClick={handleDecadeClick}
				onClick={(e) => {
					setDecadeActive('90');
					handleDecadeClick(e);
				}}
				data-decade='90'
			>
				90's
			</div>
			<div
				className={decadeActive === '80' ? 'decade-btn active' : 'decade-btn'}
				// onClick={handleDecadeClick}
				onClick={(e) => {
					setDecadeActive('80');
					handleDecadeClick(e);
				}}
				data-decade='80'
			>
				80's
			</div>
			<div
				className={decadeActive === '70' ? 'decade-btn active' : 'decade-btn'}
				// onClick={handleDecadeClick}
				onClick={(e) => {
					setDecadeActive('70');
					handleDecadeClick(e);
				}}
				data-decade='70'
			>
				70's
			</div>
			{/* <div className='decade-btn' onClick={handleDecadeClick} data-decade='20'>
				20's
			</div>
			<div className='decade-btn' onClick={handleDecadeClick} data-decade='10'>
				10's
			</div>
			<div className='decade-btn' onClick={handleDecadeClick} data-decade='00'>
				00's
			</div>
			<div className='decade-btn' onClick={handleDecadeClick} data-decade='90'>
				90's
			</div>
			<div className='decade-btn' onClick={handleDecadeClick} data-decade='80'>
				80's
			</div>
			<div className='decade-btn' onClick={handleDecadeClick} data-decade='70'>
				70's
			</div> */}
			{/* <div className='decade-btn' onClick={(e) => handleDecadeClick}>
				<p>20's</p>
			</div>
			<div className='decade-btn' onClick={(e) => handleDecadeClick}>
				<p>10's</p>
			</div>
			<div className='decade-btn' onClick={(e) => handleDecadeClick}>
				<p>00's</p>
			</div>
			<div className='decade-btn' onClick={(e) => handleDecadeClick}>
				<p>90's</p>
			</div>
			<div className='decade-btn' onClick={(e) => handleDecadeClick}>
				<p>80's</p>
			</div>
			<div className='decade-btn' onClick={(e) => handleDecadeClick}>
				<p>70's</p>
			</div> */}
		</StyledDecadeSelectButtons>
	);
};
const StyledDecadeSelectButtons = styled.div`
	/* border: 1px solid black; */
	padding: 0 1rem;
	display: flex;
	column-gap: 0.5rem;
	row-gap: 0.5rem;
	/* flex-wrap: wrap; */
	background: ${({ theme }) => theme.white};
	.decade-btn {
		background-color: ${({ theme }) => theme.bgGrey};
		/* flex: 1 1 30%; */
		flex: 1;
		padding: 0.5rem 1rem;
		color: ${({ theme }) => theme.txtGrey};
		font-size: 1.2rem;
		text-align: center;
		cursor: pointer;
		border: 1px solid ${({ theme }) => theme.bgGrey};
		border-radius: 4px;
		font-weight: bold;
		transition: all 500ms linear;
		/* &:hover {
			color: ${({ theme }) => theme.primaryColor};
			transition: all 200ms linear;
		} */
		/* p {
			padding: 0.5rem 1rem;
			color: ${({ theme }) => theme.txtGrey};
			font-size: 1.2rem;
			text-align: center;
			cursor: pointer;
			&:hover {
				color: ${({ theme }) => theme.secondaryColor};
			}
		} */
		&.active {
			background: ${({ theme }) => theme.white};
			color: ${({ theme }) => theme.secondaryColor};
			border: 1px solid ${({ theme }) => theme.secondaryColor};
			/* color: ${({ theme }) => theme.primaryColor};
			border: 1px solid ${({ theme }) => theme.primaryColor}; */
			border-radius: 4px;
			font-weight: bold;
			transition: all 500ms linear;
		}
	}
`;

export default DecadeSelectButtons;
