import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import BandGigsList from '../components/BandGigsList';
// import { FaUsers } from 'react-icons/fa';
import { BsMusicNoteList } from 'react-icons/bs';

import { log } from '../helper';
// import BandSupportGigsList from '../components/BandSupportGigsList';
// import BandHeadlineGigsList from '../components/BandHeadlineGigsList';
// import TopBandWidget from '../components/TopBandWidget';
import BandCountRankWidget from '../components/BandCountRankWidget';
import BandAllTopsWidget from '../components/BandAllTopsWidget';
import BandHeader from '../components/BandHeader';
import BandRadarWidget from '../components/BandRadarWidget';
import BandFilteredGigsList from '../components/BandFilteredGigsList';
import BandGigsListFilter from '../components/BandGigsListFilter';
// import { useBandsContext } from '../hooks/useBandsContext';
// import BandAllTopsWidget from '../components/BandAllTopsWidget';

const Band = ({
	band,
	id,
	bandGigListStatusHandler,
	filteredBandGigs,
	setFilteredBandGigs,
}) => {
	const { user } = useAuthContext();
	const { dispatch } = useGigsContext();
	// const {currentFestivalCount} = useBandsContext()
	const {
		bandToView,
		setBandDetailsData,
		bandDetailsData,
		setBandSupportGigsData,
		// bandSupportGigsData,
		setBandHeadlineGigsData,
		// bandHeadlineGigsData,
		setBandAllGigsData,
		bandAllGigsData,
		bandFestivalCount,
		// setBandFestivalCount,
		bandWinnersStats,
	} = useStateContext();

	useEffect(() => {
		log(bandToView, ' band in band');
		log(bandWinnersStats, 'bandWinnersStats in band');

		const fetchBand = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			// support
			const clonedBandSupportData = [...json];
			const bandSupportData = clonedBandSupportData
				.filter((obj) => obj.support_band === bandToView)
				.sort((a, b) => {
					return new Date(b.gig_date) - new Date(a.gig_date);
				});

			// headline
			const clonedBandHeadlineData = [...json];
			const bandHeadlineData = clonedBandHeadlineData
				.filter((obj) => obj.headline_band === bandToView)
				.sort((a, b) => {
					return new Date(b.gig_date) - new Date(a.gig_date);
				});

			// all
			const clonedBandAllData = [...json];
			const bandAllData = clonedBandAllData
				.filter(
					(obj) =>
						obj.headline_band === bandToView || obj.support_band === bandToView
				)
				.sort((a, b) => {
					return new Date(b.gig_date) - new Date(a.gig_date);
				});

			// festival count
			// const clonedFestivalCount = [...json];
			// const festivalCount = clonedFestivalCount.filter(
			// 	(obj) => obj.isFestival === true
			// ).length;

			// const bandData = json.filter((obj) => obj.headline_band === bandToView);
			const bandData = json
				.filter((obj) => obj.headline_band === bandToView)
				.sort((a, b) => {
					return new Date(b.gig_date) - new Date(a.gig_date);
				});

			// const sortedByDate = bandData.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });

			if (response.ok) {
				setBandDetailsData(bandData);
				setBandSupportGigsData(bandSupportData);
				setBandHeadlineGigsData(bandHeadlineData);
				setBandAllGigsData(bandAllData);
				setFilteredBandGigs(bandAllData);
				// set band counts
				// setBandFestivalCount(festivalCount);
				// set band ranks
			}
		};
		if (user) {
			fetchBand();
		}
	}, [bandToView, dispatch, user]);

	log(bandAllGigsData, 'band all gigs data - band');
	log(bandDetailsData, 'band details data - band');

	return (
		<StyledBand
			className='band-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <div className='band-gigs-list-header'>
				<p>
					All Gigs by
					<span> {bandToView}</span>
				</p>
				<div>
					<FaUsers className='nav-icon' />x
					{bandDetailsData && bandDetailsData.length}
				</div>
			</div> */}
			{/* {bandDetailsData && bandFestivalCount && (
				<BandCountRankWidget bandCounterData={currentFestivalCount} />
			)} */}

			{/* <h1>{bandToView}</h1> */}
			{bandToView && <BandHeader />}

			{bandDetailsData && bandFestivalCount && (
				<BandCountRankWidget
					bandCounterData={bandAllGigsData}
					bandFestivalCount={bandFestivalCount}
				/>
			)}
			{bandDetailsData && bandAllGigsData && bandWinnersStats && (
				<BandAllTopsWidget gigCounterData={bandAllGigsData} />
			)}
			{/* {bandDetailsData && bandAllGigsData && (
				<TopBandWidget gigCounterData={bandAllGigsData} />
			)} */}

			<BandRadarWidget />

			{bandDetailsData && bandAllGigsData.length > 0 && (
				<>
					<div className='filter-container'>
						<BandGigsListFilter
							bandGigListStatusHandler={bandGigListStatusHandler}
						/>
						<div className='gig-list-icon-wrapper'>
							<BsMusicNoteList className='nav-icon' />
							{bandDetailsData && filteredBandGigs && filteredBandGigs.length}
							{/* {bandDetailsData && bandAllGigsData.length} */}
						</div>
					</div>
					{bandDetailsData && (
						<BandFilteredGigsList gigs={filteredBandGigs && filteredBandGigs} />
					)}
				</>
			)}
			{/* {bandDetailsData && bandAllGigsData.length > 0 && (
				<>
					<div className='band-gigs-list-header-filter'>
						<BandGigsListFilter
							bandGigListStatusHandler={bandGigListStatusHandler}
						/>
						<div className='gig-list-icon-wrapper'>
							<BsMusicNoteList className='nav-icon' />
							{bandDetailsData && filteredBandGigs && filteredBandGigs.length}
							{bandDetailsData && bandAllGigsData.length}
						</div>
					</div>
					{bandDetailsData && (
						<BandFilteredGigsList gigs={filteredBandGigs && filteredBandGigs} />
					)}
				</>
			)} */}

			{/* below are working 3 separate lists  */}

			{/* {bandDetailsData && bandAllGigsData.length > 0 && (
				<>
					<div className='band-gigs-list-header'>
						<p>
							all
						</p>
						<div>
							<BsMusicNoteList className='nav-icon' />
							{bandDetailsData && bandAllGigsData.length}
						</div>
					</div>
					{bandDetailsData && <BandGigsList gigs={bandAllGigsData} />}
				</>
			)}
			{bandDetailsData && bandHeadlineGigsData.length > 0 && (
				<>
					<div className='band-gigs-list-header'>
						<p>
							headline
						</p>
						<div>
							<BsMusicNoteList className='nav-icon' />
							{bandDetailsData && bandHeadlineGigsData.length}
						</div>
					</div>
					{bandDetailsData && (
						<BandHeadlineGigsList gigs={bandHeadlineGigsData} />
					)}
				</>
			)}


			{bandDetailsData && bandSupportGigsData.length > 0 && (
				<>
					<div className='band-gigs-list-header'>
						<p>
							support
						</p>
						<div>
							<BsMusicNoteList className='nav-icon' />

							{bandDetailsData && bandSupportGigsData.length}
						</div>
					</div>
					{bandDetailsData && (
						<BandSupportGigsList gigs={bandSupportGigsData} />
					)}
				</>
			)} */}
		</StyledBand>
	);
};
const StyledBand = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 0.5rem;
	flex: 1;
	max-width: 42rem;
	padding: 0 1rem;
	overflow: hidden;
	overflow-y: auto;
	transition: all 200ms linear;
	margin: 0 auto;
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.primaryColor};
	::-webkit-scrollbar {
		/* height: 12px !important; */
		width: 5px;
		background: rgb(75, 74, 74);
		user-select: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}
	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}
	.band-gigs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.2rem 0.5rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
			span {
				text-transform: capitalize;
			}
		}
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
			font-size: 1.4rem;
			font-weight: bolder;
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 1.6rem;
			}
		}
	}
	/* .band-gigs-list-header-filter {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.2rem 0.5rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
			span {
				text-transform: capitalize;
			}
		}
		div.select {
			border: 2px solid blue;
			position: relative;
		}
		div.gig-list-icon-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
			font-size: 1.4rem;
			font-weight: bolder;
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 1.6rem;
			}
		}
	} */
	.filter-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin: 0 0.5rem; */
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		div.gig-list-icon-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
			font-size: 1.4rem;
			font-weight: bolder;
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 1.6rem;
			}
		}
	}
`;

export default Band;
