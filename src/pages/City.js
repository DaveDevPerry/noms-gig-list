import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import CityGigsList from '../components/CityGigsList';
// import { FaUsers } from 'react-icons/fa';
import { BsMusicNoteList } from 'react-icons/bs';
import { log } from '../helper';

const City = ({ band, id }) => {
	const { user } = useAuthContext();
	const { dispatch } = useGigsContext();
	const { cityToView, setCityDetailsData, cityDetailsData } = useStateContext();

	useEffect(() => {
		log(cityToView, ' band in band');

		const fetchCity = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			// const bandData = json.filter((obj) => obj.headline_band === cityToView);
			const cityData = json
				.filter((obj) => obj.city === cityToView)
				.sort((a, b) => {
					return new Date(b.gig_date) - new Date(a.gig_date);
				});

			// const sortedByDate = cityData.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });

			if (response.ok) {
				setCityDetailsData(cityData);
				// dispatch({
				// 	type: 'SET_BAND_GIGS',
				// 	payload: bandData,
				// });
				// log(bandData, 'res ok band data');
				// log(sortedByDate, 'res ok sorted band data');
			}
		};
		if (user) {
			fetchCity();
		}
	}, [cityToView, dispatch, user]);

	return (
		<StyledCity
			className='city-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <div>Band {band._id}</div>
			<div>Band {band.name}</div> */}
			{/* <p>city page</p> */}
			<div className='city-gigs-list-header'>
				<p>
					<span> {cityToView}</span>
				</p>
				<div>
					{/* <FaUsers className='nav-icon' />x */}
					<BsMusicNoteList className='nav-icon' />
					{cityDetailsData && cityDetailsData.length}
				</div>
			</div>
			{/* <div> */}
			{cityDetailsData && <CityGigsList gigs={cityDetailsData} />}
			{/* </div> */}
			{/* <div>
				{cityDetailsData &&
					cityDetailsData.map((gig, index) => {
						return (
							<li key={index}>
								{gig.gig_date} - {gig.venue} - {gig.city}
							</li>
						);
					})}
			</div> */}
		</StyledCity>
	);
};
const StyledCity = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
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
	.city-gigs-list-header {
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

export default City;
