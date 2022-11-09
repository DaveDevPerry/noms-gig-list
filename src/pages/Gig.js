import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import BandGigsList from '../components/BandGigsList';
// import { FaUsers } from 'react-icons/fa';
import { log } from '../helper';
import { useNavigate } from 'react-router-dom';

import { GiCampingTent } from 'react-icons/gi';
import { intlFormatDistance } from 'date-fns';
// import { format } from 'date-fns';
// import BandSupportGigsList from '../components/BandSupportGigsList';
// import BandHeadlineGigsList from '../components/BandHeadlineGigsList';
// import TopBandWidget from '../components/TopBandWidget';

const Gig = ({ band, id }) => {
	const { user } = useAuthContext();
	const { gigCounterData, dispatch } = useGigsContext();
	// const { gig,gigCounterData, dispatch } = useGigsContext();
	const {
		gigToView,
		dataLoaded,
		// setBandDetailsData,
		// bandDetailsData,
		// setBandSupportGigsData,
		// bandSupportGigsData,
		// setBandHeadlineGigsData,
		// bandHeadlineGigsData,
		// setBandAllGigsData,
		// bandAllGigsData,
	} = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	useEffect(() => {
		log(gigToView, ' gig id to view  in gig');

		const fetchGig = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			const clonedGigData = [...json];
			const gigAllData = clonedGigData.filter((obj) => obj._id === gigToView);

			log(gigAllData, 'gig all data - gig');

			// // support
			// const clonedBandSupportData = [...json];
			// const bandSupportData = clonedBandSupportData
			// 	.filter((obj) => obj.support_band === 	gigToView,
			// 	.sort((a, b) => {
			// 		return new Date(b.gig_date) - new Date(a.gig_date);
			// 	});

			// // headline
			// const clonedBandHeadlineData = [...json];
			// const bandHeadlineData = clonedBandHeadlineData
			// 	.filter((obj) => obj.headline_band === 	gigToView,
			// 	.sort((a, b) => {
			// 		return new Date(b.gig_date) - new Date(a.gig_date);
			// 	});

			// // all
			// const clonedBandAllData = [...json];
			// const bandAllData = clonedBandAllData
			// 	.filter(
			// 		(obj) =>
			// 			obj.headline_band === 	gigToView,|| obj.support_band === 	gigToView,				)
			// 	.sort((a, b) => {
			// 		return new Date(b.gig_date) - new Date(a.gig_date);
			// 	});

			// // const bandData = json.filter((obj) => obj.headline_band === 	gigToView,;
			// const bandData = json
			// 	.filter((obj) => obj.headline_band === 	gigToView,
			// 	.sort((a, b) => {
			// 		return new Date(b.gig_date) - new Date(a.gig_date);
			// 	});

			// const sortedByDate = bandData.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });

			if (response.ok) {
				// setBandDetailsData(bandData);
				// setBandSupportGigsData(bandSupportData);
				// setBandHeadlineGigsData(bandHeadlineData);
				// setBandAllGigsData(bandAllData);
				dispatch({
					type: 'SET_GIG',
					payload: gigAllData,
				});
				// log(bandData, 'res ok band data');
				// log(sortedByDate, 'res ok sorted band data');
			}
		};
		if (user) {
			fetchGig();
		}
	}, [gigToView, dispatch, user]);

	// log(bandAllGigsData, 'band all gigs data - band');

	return (
		<StyledBand
			className='band-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{gigCounterData.gig && gigCounterData.gig[0] && (
				<StyledGigHeaderWidget>
					<p className='header-time'>
						<strong>
							{intlFormatDistance(
								new Date(
									new Date(gigCounterData.gig[0].gig_date).toDateString()
								),
								new Date(new Date(new Date().toDateString())),
								{
									numeric: 'auto',
								}
							)}
						</strong>
					</p>
					<p className='header-title'>
						<strong>{gigCounterData.gig[0].headline_band}</strong>
					</p>
					{gigCounterData.gig[0].isFestival &&
						gigCounterData.gig[0].isFestival === true && (
							<div className='gig-icons-wrapper'>
								<GiCampingTent className='gig-icon' />
							</div>
						)}
					<p className='header-location'>
						<span>
							<strong>{gigCounterData.gig[0].venue}</strong>
						</span>
						<span>{gigCounterData.gig[0].city}</span>
					</p>

					<p className='header-date'>
						{new Date(gigCounterData.gig[0].gig_date).toLocaleDateString(
							'en-us',
							{
								weekday: 'long',
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							}
						)}
					</p>
				</StyledGigHeaderWidget>
			)}
			{gigCounterData.gig && gigCounterData.gig[0].support_band !== '' && (
				<StyledGigSupportWidget>
					<p className='support-title'>support</p>
					<p className='support-band'>{gigCounterData.gig[0].support_band}</p>
				</StyledGigSupportWidget>
			)}
			{gigCounterData.gig && gigCounterData.gig[0].gig_details !== '' && (
				<StyledGigDetailsWidget>
					<p className='details-title'>details</p>
					<p className='details-band'>{gigCounterData.gig[0].gig_details}</p>
				</StyledGigDetailsWidget>
			)}
			{/* {gig && gig[0] && (
				<StyledGigHeaderWidget>
					<p className='header-time'>
						<strong>
							{intlFormatDistance(
								new Date(new Date(gig[0].gig_date).toDateString()),
								new Date(new Date(new Date().toDateString())),
								{
									numeric: 'auto',
								}
							)}
						</strong>
					</p>
					<p className='header-title'>
						<strong>{gig[0].headline_band}</strong>
					</p>
					{gig[0].isFestival && gig[0].isFestival === true && (
						<div className='gig-icons-wrapper'>
							<GiCampingTent className='gig-icon' />
						</div>
					)}
					<p className='header-location'>
						<span>
							<strong>{gig[0].venue}</strong>
						</span>
						<span>{gig[0].city}</span>
					</p>

					<p className='header-date'>
						{new Date(gig[0].gig_date).toLocaleDateString('en-us', {
							weekday: 'long',
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})}
					</p>
				</StyledGigHeaderWidget>
			)}
			{gig && gig[0].support_band !== '' && (
				<StyledGigSupportWidget>
					<p className='support-title'>support</p>
					<p className='support-band'>{gig[0].support_band}</p>
				</StyledGigSupportWidget>
			)}
			{gig && gig[0].gig_details !== '' && (
				<StyledGigDetailsWidget>
					<p className='details-title'>details</p>
					<p className='details-band'>{gig[0].gig_details}</p>
				</StyledGigDetailsWidget>
			)} */}
		</StyledBand>
	);
};
const StyledBand = styled(motion.div)`
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
		padding: 0rem 1rem;
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
		}
	}
`;
const StyledGigHeaderWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	/* padding: 2rem 1rem;
	padding: 1rem 2rem; */
	padding: 2rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	row-gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.header-time {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.6rem;
		font-size: 2rem;
		color: ${({ theme }) => theme.txtGrey};
		/* margin-bottom: 1rem; */
	}
	.header-title {
		color: ${({ theme }) => theme.secondaryColor};
		text-transform: uppercase;
		font-size: 3rem;
		text-align: center;
		line-height: 1;
	}
	.gig-icons-wrapper {
		/* justify-content: flex-end; */
		align-items: center;
		display: flex;
		/* flex: 1; */
		/* border: 1px solid; */
		/* text-align: right; */
		.gig-icon {
			/* color: ${({ theme }) => theme.secondaryColor}; */
			/* color: ${({ theme }) => theme.primaryColor}; */
			color: ${({ theme }) => theme.green};
			font-size: 6rem;
		}
	}
	.header-location {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.6rem;
		color: ${({ theme }) => theme.txtGrey};
		/* row-gap: 1rem; */
		span {
			text-transform: capitalize;
			/* font-weight: bolder; */
			/* font-weight: bold; */

			strong {
				/* font-weight: bolder; */
				font-size: 2rem;
				/* color: ${({ theme }) => theme.txtGrey}; */
			}
		}
	}
	/* .header-location {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		column-gap: 1rem;
		span {
			text-transform: capitalize;
			font-weight: bolder;
		}
	} */
	.header-date {
		font-size: 1.6rem;
		font-style: italic;
		/* margin-top: 1rem; */
		color: ${({ theme }) => theme.secondaryColor};
	}
`;
const StyledGigSupportWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem 2rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	row-gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.support-title {
		color: ${({ theme }) => theme.secondaryColor};
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: bold;
	}
	.support-band {
		/* display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center; */
		font-size: 2rem;
		/* column-gap: 1rem; */
		/* span { */
		text-transform: uppercase;
		font-weight: bolder;
		color: ${({ theme }) => theme.txtGrey};
		/* } */
	}
	/* .support-date {
		font-size: 2rem;
	} */
`;
const StyledGigDetailsWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem 2rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	row-gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.details-title {
		color: ${({ theme }) => theme.secondaryColor};
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: bold;
	}
	.details-band {
		/* display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center; */
		font-size: 1.6rem;
		/* column-gap: 1rem; */
		/* span { */
		text-transform: capitalize;
		color: ${({ theme }) => theme.txtGrey};
		/* font-weight: bolder; */
		/* } */
	}
	/* .support-date {
		font-size: 2rem;
	} */
`;

export default Gig;
