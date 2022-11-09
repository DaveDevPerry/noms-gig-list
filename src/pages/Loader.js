// import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { BsMusicNoteList } from 'react-icons/bs';
import { useAuthContext } from '../hooks/useAuthContext';
import { useGigsContext } from '../hooks/useGigsContext';
import { useBandsContext } from '../hooks/useBandsContext';

import { useStateContext } from '../lib/context';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
// import { log } from '../helper';
// import { log } from '../helper';
// import { motion } from 'framer-motion';

const Loader = () => {
	const { gigs, dispatch } = useGigsContext();
	const { bandCount, dispatch: bandDispatch } = useBandsContext();
	const { globalStatData, dispatch: gigsDispatch } = useGigsContext();
	const { user } = useAuthContext();
	const navigate = useNavigate();

	// const [fadeOutLoader, setFadeOutLoader] = useState(false);
	const [crowdOutLoader, setCrowdOutLoader] = useState(false);

	// const {setDataLoaded} = useStateContext();

	const {
		setTotalGigsPerCity,
		setTotalGigsPerBand,
		setTotalSupportGigsPerBand,
		setDataLoaded,
		setCombinedGigsPerBand,
		setTotalGigsPerVenue,
		setTotalGigsEachYear,
		setTotalFestivalCount,
		setTotalBandCount,
		setTotalGigCount,
		setTotalCityGigs,
		// setBandToView,
	} = useStateContext();

	useEffect(() => {
		const fetchGigs = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			// const clonedJson = [...json];
			// const sortedGigs = clonedJson.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });

			// log(sortedGigs, 'sortedGigs');
			// const futureGigs = sortedGigs.filter((gig) => {
			// 	return (
			// 		new Date(gig.gig_date).setHours(0, 0, 0, 0) >=
			// 		new Date().setHours(0, 0, 0, 0) - 1
			// 	);
			// });

			// log(futureGigs, 'futureGigs');

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
		// setTotalGigCount(gigs)
		setTimeout(() => {
			setDataLoaded(true);
			// setFadeOutLoader(true);
			setCrowdOutLoader(true);
			// navigate('/home');

			setTimeout(() => {
				navigate('/home');
			}, 2000);
		}, 3000);
	}, [dispatch, user]);

	useEffect(() => {
		setTotalGigCount(gigs && gigs);
	}, [gigs]);

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
		setTotalBandCount(bandCount && bandCount);
	}, [bandCount]);

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

			if (response.ok) {
				gigsDispatch({
					type: 'SET_GLOBAL_STATS',
					payload: json,
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
		// const clonedCityCount = [...globalStatData.citiesGigCount];
		setTotalCityGigs(globalStatData && globalStatData.citiesGigCountWinner);
		// setTotalCityGigs(clonedCityCount);
		setTotalSupportGigsPerBand(
			globalStatData && globalStatData.supportBandsGigCount
		);
		setCombinedGigsPerBand(
			globalStatData && globalStatData.combinedBandGigsCount
		);
		setTotalGigsPerVenue(globalStatData && globalStatData.uniqueVenueCount);
		setTotalGigsEachYear(globalStatData && globalStatData.gigCountPerYear);

		setTotalFestivalCount(globalStatData && globalStatData.festivalCount);
		// setBandToView(globalStatData && globalStatData.bandsGigCount[0].bandName);
		// run global context function to return array of unique venue gigs obj
	}, [globalStatData]);

	// log('Hello loader', 1, 2, 3, Date.now());

	return (
		<AnimatePresence exitBeforeEnter>
			{/* {isFormActive && (
			<StyledGigModel
				initial={{ y: 0, translateX: '-50%' }}
				animate={{ translateY: '-100%' }}
				exit={{ translateY: '100%' }}
			>
				<GigForm
					isFormActive={isFormActive}
					setIsFormActive={setIsFormActive}
				/>
			</StyledGigModel>
		)} */}

			<StyledLoader
				className={
					crowdOutLoader === true ? 'site-loader go-white' : 'site-loader'
				}
				// className={
				// 	fadeOutLoader === true ? 'site-loader fade-out' : 'site-loader'
				// }
				// initial={{ opacity: 0 }}
				// animate={{ opacity: 1 }}
				// exit={{ opacity: 0 }}
				// key={'my_unique_key'}
				// initial={{ height: '100%' }}
				// animate={{ height: '100%' }}
				// exit={{ y: window.innerHeight }}
				// exit={{ y: window.innerHeight }}
				// initial={{ width: 0 }}
				// animate={{ width: '100%' }}
				// exit={{ x: window.innerWidth }}
			>
				{/* <h1 className='loader-title'>Music Livrary</h1> */}
				<StyledMusicNotes
					className={
						crowdOutLoader === true ? 'muzieknootjes fade-out' : 'muzieknootjes'
					}
				>
					<div className='noot-1'>&#9835; &#9833;</div>
					<div className='noot-2'>&#9833;</div>
					<div className='noot-3'>&#9839; &#9834;</div>
					<div className='noot-4'>&#9834;</div>
					<div
						className={crowdOutLoader === true ? 'crowd crowd-out' : 'crowd'}
					></div>
					{/* <div className='crowd'></div> */}
					<h1
						className={
							crowdOutLoader === true
								? 'loader-title-concert concert-out'
								: 'loader-title-concert'
						}
					>
						Concert
					</h1>
					<h1
						className={
							crowdOutLoader === true
								? 'loader-title-catalogue catalogue-out'
								: 'loader-title-catalogue'
						}
					>
						Catalogue
					</h1>
					{/* <h1 className='loader-title'>Concert</h1>
				<h1 className='loader-title'>Catalogue</h1> */}
				</StyledMusicNotes>
				{/* <h1>Gig List</h1>
			<BsMusicNoteList className='nav-icon' />
			<p>© daveperry.tech 2022</p> */}
			</StyledLoader>
		</AnimatePresence>
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
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 1rem;
	z-index: 500;

	background-color: #95e4f7;
	/* background-color: #f1f1f1; */
	/* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='496' height='496' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23F1F1F1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23D800B8'%3E%3Ccircle cx='769' cy='229' r='9'/%3E%3Ccircle cx='539' cy='269' r='9'/%3E%3Ccircle cx='603' cy='493' r='9'/%3E%3Ccircle cx='731' cy='737' r='9'/%3E%3Ccircle cx='520' cy='660' r='9'/%3E%3Ccircle cx='309' cy='538' r='9'/%3E%3Ccircle cx='295' cy='764' r='9'/%3E%3Ccircle cx='40' cy='599' r='9'/%3E%3Ccircle cx='102' cy='382' r='9'/%3E%3Ccircle cx='127' cy='80' r='9'/%3E%3Ccircle cx='370' cy='105' r='9'/%3E%3Ccircle cx='578' cy='42' r='9'/%3E%3Ccircle cx='237' cy='261' r='9'/%3E%3Ccircle cx='390' cy='382' r='9'/%3E%3C/g%3E%3C/svg%3E"); */

	/* background-image: url('bg_band.webp');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover; */
	&.go-white {
		animation: backgroundChange 1s linear forwards;
	}
	/* .loader-title-concert {
		font-size: 4rem;
		color: ${({ theme }) => theme.secondaryColor};
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, 0);
		text-align: center;
		&.concert-out {
			animation: concertOut 1s linear forwards;
		}
	}
	.loader-title-catalogue {
		font-size: 4rem;
		color: ${({ theme }) => theme.secondaryColor};
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%, 0);
		text-align: center;
		&.catalogue-out {
			animation: catalogueOut 1s linear forwards;
		}
	} */
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
	/* &.crowd-out {
		animation: crowdOut 1s linear forwards;
	} */
	/* &.fade-out {
		animation: fadeOut 1s linear forwards;
	} */
`;

const StyledMusicNotes = styled.div`
	display: block;
	margin: auto;
	/* flex-direction: column; */
	/* justify-content: space-around; */
	position: relative;
	/* width: 50%; */
	/* min-width: 300px; */
	/* height: 200px; */
	flex: 1;
	width: 100%;
	/* border: 2px solid #000; */
	/* border: 2px solid #000; */
	/* opacity: 1; */
	max-width: 80rem;
	overflow: hidden;
	&.fade-out {
		animation: fadeOut 500ms linear forwards;
		animation-delay: 1.4s;
		/* animation-delay: 1s; */
	}
	.loader-title-concert {
		font-size: 4rem;
		color: ${({ theme }) => theme.secondaryColor};
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, 0);
		text-align: center;
		&.concert-out {
			animation: concertOut 1s linear forwards;
		}
	}
	.loader-title-catalogue {
		font-size: 4rem;
		color: ${({ theme }) => theme.secondaryColor};
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%, 0);
		text-align: center;
		&.catalogue-out {
			animation: catalogueOut 1s linear forwards;
		}
	}

	.noot-1,
	.noot-2,
	.noot-3,
	.noot-4 {
		position: absolute;
		animation: notes 2s infinite linear;
		font-size: 35px;
		/* opacity: 1; */
		opacity: 0;
		/* color: ${({ theme }) => theme.secondaryColor}; */
	}

	.noot-1 {
		top: 45%;
		left: 25%;
		/* top: 60px;
		left: 0; */
		animation-delay: 0.5s;
		/* animation-duration:4s; */
	}

	.noot-2 {
		/* top: 30px;
		
		left: 30%; */
		top: 50%;
		left: 35%;
		animation-delay: 1s;
		/* animation-duration:3.5s; */
	}

	.noot-3 {
		/* top: 90px;
		left: 60%; */
		top: 45%;
		left: 45%;
		animation-delay: 1.5s;
		/* animation-duration:3s; */
	}

	.noot-4 {
		/* top: 40px;
		left: 90%; */
		top: 50%;
		left: 55%;
		animation-delay: 2s;
		/* animation-duration:2.5s; */
	}
	.crowd {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 50%;
		width: 100%;
		z-index: 500;
		background-image: url('band_silouette.webp');
		background-repeat: no-repeat;
		/* background-size: cover; */
		background-position: bottom;
		/* border: 2px solid red; */
		&.crowd-out {
			animation: crowdOut 1s linear forwards;
		}
	}
	/* &.fade-out {
		animation: fadeOut 500ms linear forwards;
		animation-delay: 3s;
	} */

	@keyframes notes {
		0% {
			transform: scale(1) translate(0, 0);
			opacity: 0;
		}
		50% {
			opacity: 1;
			transform: scale(1.5) translate(50%, -50%);
		}
		80% {
			opacity: 0;
			transform: scale(1.5) translate(100%, -100%);
		}
		100% {
			transform: scale(1.5) translate(100%, -100%);
			opacity: 0;
		}
	}

	@keyframes backgroundChange {
		0% {
			background-color: #95e4f7;
		}
		100% {
			background-color: #f1f1f1;
		}
	}
	@keyframes concertOut {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(-300%);
		}
	}
	@keyframes catalogueOut {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(200%);
		}
	}
	@keyframes crowdOut {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(100%);
		}
	}
	/* @keyframes fadeOut {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(100%);
		}
	} */
	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`;
// const StyledMusicNotes = styled.div`

// 	display: block;
// 	margin: auto;
// 	position: relative;
// 	width: 50%;
// 	min-width: 300px;
// 	height: 200px;
// 	border: 0px solid #000;

// 	.noot-1,
// 	.noot-2,
// 	.noot-3,
// 	.noot-4 {
// 		position: absolute;
// 		animation: notes 2s infinite linear;
// 		font-size: 35px;
// 		opacity: 0;
// 	}

// 	.noot-1 {
// 		top: 60px;
// 		left: 0;
// 		animation-delay: 0.5s;
// 	}

// 	.noot-2 {
// 		top: 30px;
// 		left: 30%;
// 		animation-delay: 1s;
// 	}

// 	.noot-3 {
// 		top: 90px;
// 		left: 60%;
// 		animation-delay: 1.5s;
// 	}

// 	.noot-4 {
// 		top: 40px;
// 		left: 90%;
// 		animation-delay: 2s;
// 	}

// 	@keyframes notes {
// 		0% {
// 			transform: scale(1) translate(0, 0);
// 			opacity: 0;
// 		}
// 		50% {
// 			opacity: 1;
// 			transform: scale(1.5) translate(50%, -50%);
// 		}
// 		80% {
// 			opacity: 0;
// 			transform: scale(1.5) translate(100%, -100%);
// 		}
// 		100% {
// 			transform: scale(1.5) translate(100%, -100%);
// 			opacity: 0;
// 		}
// 	}
// `;

export default Loader;
