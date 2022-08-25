import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsMusicNoteList } from 'react-icons/bs';
import { useAuthContext } from '../hooks/useAuthContext';
import { useGigsContext } from '../hooks/useGigsContext';
import { useBandsContext } from '../hooks/useBandsContext';

import { useStateContext } from '../lib/context';
// import { log } from '../helper';
// import { motion } from 'framer-motion';

const Loader = () => {
	const { dispatch } = useGigsContext();
	const { dispatch: bandDispatch } = useBandsContext();
	const { globalStatData, dispatch: gigsDispatch } = useGigsContext();
	const { user } = useAuthContext();
	const navigate = useNavigate();

	// const {setDataLoaded} = useStateContext();

	const {
		setTotalGigsPerCity,
		setTotalGigsPerBand,
		setTotalSupportGigsPerBand,
		setDataLoaded,
		setCombinedGigsPerBand,
		setTotalGigsPerVenue,
	} = useStateContext();

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
			fetchGigs();
		}
		setTimeout(() => {
			setDataLoaded(true);
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

	useEffect(() => {
		const fetchGlobalStats = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			// json.sort((a,b) => a.name > b.name ? 1 : -1)

			if (response.ok) {
				// setWorkouts(json);
				gigsDispatch({
					type: 'SET_GLOBAL_STATS',
					payload: json,
					// payload: json.sort((a, b) => (a.name > b.name ? 1 : -1)),
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGlobalStats();
		}
	}, [gigsDispatch, user]);

	useEffect(() => {
		// setTotalGigsPerBand(globalStatData && globalStatData.combinedBandGigsCount);
		setTotalGigsPerBand(globalStatData && globalStatData.bandsGigCount);
		setTotalGigsPerCity(globalStatData && globalStatData.citiesGigCount);
		setTotalSupportGigsPerBand(
			globalStatData && globalStatData.supportBandsGigCount
		);
		setCombinedGigsPerBand(
			globalStatData && globalStatData.combinedBandGigsCount
		);
		setTotalGigsPerVenue(globalStatData && globalStatData.uniqueVenueCount);
		// run global context function to return array of unique venue gigs obj
	}, [globalStatData]);

	// log('Hello loader', 1, 2, 3, Date.now());

	return (
		<StyledLoader
			className='site-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h1>Gig List</h1>
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

	/* background-color: ${({ theme }) => theme.secondaryColor}; */
	/* @include flex(center, center, column); */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 1rem;
	z-index: 500;
	/* background-color: ${({ theme }) => theme.secondaryColor}; */
	/* background-color: ${({ theme }) => theme.bgLoader};
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='532' height='532' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23D800B8' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23000000'%3E%3Ccircle cx='769' cy='229' r='10'/%3E%3Ccircle cx='539' cy='269' r='10'/%3E%3Ccircle cx='603' cy='493' r='10'/%3E%3Ccircle cx='731' cy='737' r='10'/%3E%3Ccircle cx='520' cy='660' r='10'/%3E%3Ccircle cx='309' cy='538' r='10'/%3E%3Ccircle cx='295' cy='764' r='10'/%3E%3Ccircle cx='40' cy='599' r='10'/%3E%3Ccircle cx='102' cy='382' r='10'/%3E%3Ccircle cx='127' cy='80' r='10'/%3E%3Ccircle cx='370' cy='105' r='10'/%3E%3Ccircle cx='578' cy='42' r='10'/%3E%3Ccircle cx='237' cy='261' r='10'/%3E%3Ccircle cx='390' cy='382' r='10'/%3E%3C/g%3E%3C/svg%3E"); */

	/* background-color: #f1f1f1;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23F1F1F1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23D800B8'%3E%3Ccircle cx='769' cy='229' r='9'/%3E%3Ccircle cx='539' cy='269' r='9'/%3E%3Ccircle cx='603' cy='493' r='9'/%3E%3Ccircle cx='731' cy='737' r='9'/%3E%3Ccircle cx='520' cy='660' r='9'/%3E%3Ccircle cx='309' cy='538' r='9'/%3E%3Ccircle cx='295' cy='764' r='9'/%3E%3Ccircle cx='40' cy='599' r='9'/%3E%3Ccircle cx='102' cy='382' r='9'/%3E%3Ccircle cx='127' cy='80' r='9'/%3E%3Ccircle cx='370' cy='105' r='9'/%3E%3Ccircle cx='578' cy='42' r='9'/%3E%3Ccircle cx='237' cy='261' r='9'/%3E%3Ccircle cx='390' cy='382' r='9'/%3E%3C/g%3E%3C/svg%3E"); */

	/* background-color: #f1f1f1;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='708' height='708' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23F1F1F1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23D800B8'%3E%3Ccircle cx='769' cy='229' r='9'/%3E%3Ccircle cx='539' cy='269' r='9'/%3E%3Ccircle cx='603' cy='493' r='9'/%3E%3Ccircle cx='731' cy='737' r='9'/%3E%3Ccircle cx='520' cy='660' r='9'/%3E%3Ccircle cx='309' cy='538' r='9'/%3E%3Ccircle cx='295' cy='764' r='9'/%3E%3Ccircle cx='40' cy='599' r='9'/%3E%3Ccircle cx='102' cy='382' r='9'/%3E%3Ccircle cx='127' cy='80' r='9'/%3E%3Ccircle cx='370' cy='105' r='9'/%3E%3Ccircle cx='578' cy='42' r='9'/%3E%3Ccircle cx='237' cy='261' r='9'/%3E%3Ccircle cx='390' cy='382' r='9'/%3E%3C/g%3E%3C/svg%3E"); */
	background-color: #f1f1f1;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='496' height='496' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23F1F1F1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23D800B8'%3E%3Ccircle cx='769' cy='229' r='9'/%3E%3Ccircle cx='539' cy='269' r='9'/%3E%3Ccircle cx='603' cy='493' r='9'/%3E%3Ccircle cx='731' cy='737' r='9'/%3E%3Ccircle cx='520' cy='660' r='9'/%3E%3Ccircle cx='309' cy='538' r='9'/%3E%3Ccircle cx='295' cy='764' r='9'/%3E%3Ccircle cx='40' cy='599' r='9'/%3E%3Ccircle cx='102' cy='382' r='9'/%3E%3Ccircle cx='127' cy='80' r='9'/%3E%3Ccircle cx='370' cy='105' r='9'/%3E%3Ccircle cx='578' cy='42' r='9'/%3E%3Ccircle cx='237' cy='261' r='9'/%3E%3Ccircle cx='390' cy='382' r='9'/%3E%3C/g%3E%3C/svg%3E");
	h1 {
		font-size: 2rem;
		/* color: ${({ theme }) => theme.secondaryColor}; */
		color: ${({ theme }) => theme.txtGrey};
		/* color: ${({ theme }) => theme.bgGrey}; */
		/* background-color: ${({ theme }) => theme.secondaryColor}; */
	}
	.nav-icon {
		font-size: 10rem;
		color: ${({ theme }) => theme.secondaryColor};
		/* color: ${({ theme }) => theme.bgGrey}; */
		/* background-color: ${({ theme }) => theme.secondaryColor}; */
	}
	p {
		font-size: 1.4rem;
		/* color: ${({ theme }) => theme.secondaryColor}; */
		color: ${({ theme }) => theme.txtGrey};
		/* color: ${({ theme }) => theme.bgGrey}; */
		/* background-color: ${({ theme }) => theme.secondaryColor}; */
	}
`;

export default Loader;
