import React from 'react';
import styled from 'styled-components';

const AppDetails = () => {
	return (
		<StyledAppDetails>
			<p>developed by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<a
				href='https://www.daveperry.tech'
				className='developer-link'
				rel='noopener noreferrer'
				target='_blank'
			>
				<Brand id='brand'>
					{/* <div className='email-block'></div>
				<div className='email-bar'></div>
				<div className='email-address'>dave@daveperry.tech</div> */}
					dave<span>perry</span>
					<span>.</span>tech
				</Brand>
			</a>
			<StyledLogoAnimation>
				<svg id='dp-logo-svg' viewBox='0 0 520 520' fill='#c40303'>
					<path
						id='dp-logo-svg-path'
						d='M209.376 104V399.328C156.208 416 51.7771 423.145 59.3951 318.351C61.7758 271.511 87.0107 186.882 168.905 223.084C250.799 259.285 317.298 288.977 340.311 299.298C383.162 313.588 467.437 315.493 461.724 208.794C464.104 165.13 435.536 86.8519 302.221 123.053V416'
						stroke='#c40303'
						strokeWidth='80'
					/>
				</svg>
			</StyledLogoAnimation>
			{/* <a
				href='https://www.daveperry.tech'
				className='developer-link'
				rel='noopener noreferrer'
				target='_blank'
			>
				developed by © daveperry.tech 2022
			</a> */}
		</StyledAppDetails>
	);
};
const StyledAppDetails = styled.div`
	display: flex;
	flex-direction: column;
	/* row-gap: 1rem; */
	padding: 2rem;
	padding-bottom: 3rem;
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	/* transition: all 200ms linear; */
	p {
		align-self: center;
		/* margin-top: 6rem; */
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtGrey};
	}
	a.developer-link {
		text-decoration: none;
		align-self: center;
		/* margin-top: 6rem; */
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtDarkGrey};
	}
`;

const Brand = styled.div`
	/* a { */
	font-family: 'Oswald', serif;
	font-size: 2.8rem;
	font-weight: lighter;
	/* color: white; */
	text-align: center;
	line-height: 1;
	span {
		font-weight: bolder;
	}
	span:last-child {
		/* color: red; */
		color: ${({ theme }) => theme.red};

		font-size: 5rem;
		line-height: 0;
		font-weight: bolder;
	}
	/* } */
`;
const StyledLogoAnimation = styled.div`
	/* border: 1px solid black; */
	display: none;
	#dp-logo-svg-path {
		stroke-dasharray: 1569;
		stroke-dashoffset: 1569;
		/* animation: line-anim 2s ease-in-out forwards;
		animation-delay: 5.2s; */
	}
	/* @keyframes line-anim {
		to {
			stroke-dashoffset: 0;
		}
	} */
	/* #dp-logo-svg path:nth-child(1) {
		stroke-dasharray: 1569;
		stroke-dashoffset: 1569;
		animation: line-anim 2s ease-in-out forwards;
		animation-delay: 5.2s;
	}
	@keyframes line-anim {
		to {
			stroke-dashoffset: 0;
		}
	} */
`;

export default AppDetails;
