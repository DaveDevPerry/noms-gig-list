import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsMusicNoteList } from 'react-icons/bs';
// import { motion } from 'framer-motion';

const Loader = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/home');
		}, 3000);
	});
	return (
		<StyledLoader
			className='site-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h1>Nom's Gig List?</h1>
			<BsMusicNoteList className='nav-icon' />
			<p>© daveperry.tech 2022</p>
		</StyledLoader>
	);
};
const StyledLoader = styled(motion.section)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.secondaryColor};
	/* @include flex(center, center, column); */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 1rem;
	z-index: 500;
	h1 {
		font-size: 2rem;
		color: ${({ theme }) => theme.bgGrey};
	}
	.nav-icon {
		font-size: 10rem;
		color: ${({ theme }) => theme.bgGrey};
	}
	p {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.bgGrey};
	}
`;

export default Loader;
