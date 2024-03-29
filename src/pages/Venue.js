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
import VenueGigsList from '../components/VenueGigsList';
// import BandSupportGigsList from '../components/BandSupportGigsList';
// import BandHeadlineGigsList from '../components/BandHeadlineGigsList';
// import TopBandWidget from '../components/TopBandWidget';

const Venue = ({ band, id }) => {
	const { user } = useAuthContext();
	const { dispatch } = useGigsContext();
	const {
		venueToView,
		venueDetailsData,
		setVenueDetailsData,
		venueAllGigsData,
		setVenueAllGigsData,
		// setBandSupportGigsData,
		// bandSupportGigsData,
		// setBandHeadlineGigsData,
		// bandHeadlineGigsData,
		// setBandAllGigsData,
		// bandAllGigsData,
	} = useStateContext();

	useEffect(() => {
		log(venueToView, ' venue in venue');

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

			// support
			// const clonedBandSupportData = [...json];
			// const bandSupportData = clonedBandSupportData
			// 	.filter((obj) => obj.support_band === venueToView)
			// 	.sort((a, b) => {
			// 		return new Date(b.gig_date) - new Date(a.gig_date);
			// 	});

			// // headline
			// const clonedBandHeadlineData = [...json];
			// const bandHeadlineData = clonedBandHeadlineData
			// 	.filter((obj) => obj.headline_band === venueToView)
			// 	.sort((a, b) => {
			// 		return new Date(b.gig_date) - new Date(a.gig_date);
			// 	});

			// // all
			// const clonedBandAllData = [...json];
			// const bandAllData = clonedBandAllData
			// 	.filter(
			// 		(obj) =>
			// 			obj.headline_band === venueToView || obj.support_band === venueToView
			// 	)
			// 	.sort((a, b) => {
			// 		return new Date(b.gig_date) - new Date(a.gig_date);
			// 	});

			// const bandData = json.filter((obj) => obj.headline_band === venueToView);
			const clonedData = [...json];
			const venueData = clonedData
				.filter(
					(obj) =>
						obj.venue === venueToView.venue && obj.city === venueToView.city
				)
				.sort((a, b) => {
					return new Date(b.gig_date) - new Date(a.gig_date);
				});

			// const sortedByDate = bandData.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });

			if (response.ok) {
				// setBandDetailsData(bandData);
				// setBandSupportGigsData(bandSupportData);
				// setBandHeadlineGigsData(bandHeadlineData);
				// setBandAllGigsData(bandAllData);
				setVenueAllGigsData(venueData);
				setVenueDetailsData(venueData);
			}
		};
		if (user) {
			fetchGigs();
		}
	}, [venueToView, dispatch, user]);

	// log(bandAllGigsData, 'band all gigs data - band');

	return (
		<StyledVenue
			className='venue-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <div className='band-gigs-list-header'>
				<p>
					All Gigs by
					<span> {venueToView}</span>
				</p>
				<div>
					<FaUsers className='nav-icon' />x
					{bandDetailsData && bandDetailsData.length}
				</div>
			</div> */}
			{/* {bandDetailsData && bandAllGigsData && (
				<TopBandWidget gigCounterData={bandAllGigsData} />
			)} */}

			{venueDetailsData && venueAllGigsData.length > 0 && (
				<>
					<div className='band-gigs-list-header'>
						<p>
							<span>
								{venueToView.venue}, {venueToView.city}
							</span>
						</p>
						<div>
							{/* <FaUsers className='nav-icon' />x */}
							<BsMusicNoteList className='nav-icon' />

							{venueDetailsData && venueAllGigsData.length}
						</div>
					</div>
					{venueDetailsData && <VenueGigsList gigs={venueAllGigsData} />}
				</>
			)}
		</StyledVenue>
	);
};
const StyledVenue = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	flex: 1;
	max-width: 80rem;
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
		user-select: none; /* supported by Chrome and Opera */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
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
		/* padding: 0rem 1rem; */
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
			/* font-size: 1.4rem; */
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 1.6rem;
			}
		}
	}
`;

export default Venue;
