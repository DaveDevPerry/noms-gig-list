import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsMusicNoteList } from 'react-icons/bs';
import { useAuthContext } from '../hooks/useAuthContext';
import { useGigsContext } from '../hooks/useGigsContext';
import { useBandsContext } from '../hooks/useBandsContext';
// import { motion } from 'framer-motion';

const Loader = () => {
	const { dispatch } = useGigsContext();
	const { dispatch: bandDispatch } = useBandsContext();
	const { user } = useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchGigs = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					// const response = await fetch('/api/weights', {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_GIGS',
					payload: json,
				});
			}
		};
		if (user) {
			// fetchGigs();
			fetchGigs();
		}
		setTimeout(() => {
			navigate('/home');
		}, 3000);
	}, [dispatch, user]);

	useEffect(() => {
		const fetchBands = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				bandDispatch({
					type: 'SET_BANDS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchBands();
		}
	}, [bandDispatch, user]);
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
