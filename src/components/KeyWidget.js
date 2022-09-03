import React from 'react';
import styled from 'styled-components';
// import { GiLaurelsTrophy } from 'react-icons/gi';
import { GiCampingTent, GiLaurelsTrophy } from 'react-icons/gi';
// import { FaUsers } from 'react-icons/fa';
// import {  BsWhatsapp } from 'react-icons/bs';
import { BsWhatsapp, BsMusicNoteList } from 'react-icons/bs';
// import { BsFillShareFill, BsWhatsapp, BsMusicNoteList } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiPresentationChartLine } from 'react-icons/hi';
import { BsPlusCircleFill } from 'react-icons/bs';
import { RiHomeLine } from 'react-icons/ri';
import { MdManageSearch } from 'react-icons/md';
// import { SiBandsintown } from 'react-icons/si';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import gigBarWidget from './gigBarWidget';

const KeyWidget = () => {
	// const percentage = 20.345;
	// const { gigCounterData } = useGigsContext();
	// const { gigCounterData, dispatch } = useGigsContext();
	// const { user } = useAuthContext();

	// useEffect(() => {

	// 	const fetchGigCounterData = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
	// 			{
	// 				// const response = await fetch('/api/weights', {
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			dispatch({
	// 				type: 'SET_GIG_COUNTER_DATA',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		// fetchGigs();
	// 		fetchGigCounterData();
	// 	}
	// }, [dispatch, user]);

	// log(gigCounterData, 'gig counter data');

	return (
		<StyledKeyWidget className='key-widget'>
			{/* <div className='key-list-header'>
				<p>Key</p>
			</div> */}
			<h3>Key</h3>
			<ul className='key-widget-list'>
				{/* <li>
					<div className='gig-icons-wrapper'>
						<FaUsers className='band-icon' />
					</div>
					<p className='key-name'>band</p>
				</li> */}
				<li>
					<div className='gig-icons-wrapper'>
						<RiHomeLine className='home-icon' />
					</div>
					<p className='key-name'>Home</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<MdManageSearch className='search-icon' />
					</div>
					<p className='key-name'>Search</p>
				</li>

				<li>
					<div className='gig-icons-wrapper'>
						<HiPresentationChartLine className='stats-icon' />
					</div>
					<p className='key-name'>Statistics</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<IoSettingsOutline className='settings-icon' />
					</div>
					<p className='key-name'>Settings</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<BsPlusCircleFill className='add-icon' />
					</div>
					<p className='key-name'>Add a Gig</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<BsWhatsapp className='share-icon' />
					</div>
					<p className='key-name'>share via whatsapp</p>
				</li>
				{/* <li>
					<div className='gig-icons-wrapper'>
						<BsFillShareFill className='share-icon' />
					</div>
					<p className='key-name'>share via whatsapp</p>
				</li> */}
				<li>
					<div className='gig-icons-wrapper'>
						<GiLaurelsTrophy className='arrow-icon gold' />
					</div>
					<p className='key-name'>ranked first</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<BsMusicNoteList className='list-total-icon' />
					</div>
					<p className='key-name'>list total</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<GiCampingTent className='gig-icon' />
					</div>
					<p className='key-name'>festival gig</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<p>
							<strong>H</strong>
						</p>
					</div>
					<p className='key-name'>headline band</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<p>
							<strong>S</strong>
						</p>
					</div>
					<p className='key-name'>support band</p>
				</li>
				<li>
					<div className='gig-icons-wrapper'>
						<p>
							<strong>T</strong>
						</p>
					</div>
					<p className='key-name'>total gigs</p>
				</li>
			</ul>
		</StyledKeyWidget>
	);
};
const StyledKeyWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	/* padding: 1rem 2rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 200ms linear;
	/* justify-content: center; */
	/* flex: 1; */
	h3 {
		text-align: center;
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
	}
	.key-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding: 0rem 1rem; */
		padding: 0.2rem 0.5rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
		}
	}

	.key-widget-list {
		/* display: flex;
		flex-direction: column;
		flex: 1; */
		padding: 1rem;
		-webkit-column-count: 2; /* Chrome/Opera, Safari */
		-moz-column-count: 2; /* Mozilla Firefox */
		column-count: 2;

		/* Properties below are optional: */
		-webkit-column-gap: 2rem; /* Chrome/Opera, Safari */
		-moz-column-gap: 2rem; /* Mozilla Firefox */
		column-gap: 2rem;

		-webkit-column-rule: 1px single grey; /* Chrome/Opera, Safari */
		-moz-column-rule: 1px single grey; /* Mozilla Firefox */
		column-rule: 1px single grey;
		li {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			column-gap: 0.5rem;
			height: 2.2rem;
			/* margin-top: 0.5rem; */
			padding: 1.4rem 0;
			/* &:first-of-type {
				flex-direction: row-reverse;
			} */
			&:nth-child(-n + 6) {
				flex-direction: row-reverse;
			}
			.gig-icons-wrapper {
				justify-content: center;
				align-items: center;
				display: flex;
				/* flex: 1; */
				/* text-align: right; */
				width: 2.4rem;
				.gig-icon {
					/* color: ${({ theme }) => theme.primaryColor}; */
					color: ${({ theme }) => theme.green};
					/* color: ${({ theme }) => theme.secondaryColor}; */
					/* font-size: 2rem; */
					font-size: 2.2rem;
				}
				.band-icon {
					color: ${({ theme }) => theme.red};
					font-size: 2rem;
				}
				.share-icon {
					font-size: 1.8rem;
					color: ${({ theme }) => theme.green};
				}
				.arrow-icon.gold {
					font-size: 2.2rem;
					color: ${({ theme }) => theme.gold};
				}
				.list-total-icon {
					color: ${({ theme }) => theme.secondaryColor};
					font-size: 1.6rem;
				}
				.search-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 2.6rem;
				}
				.settings-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 2.2rem;
				}
				.home-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 2.2rem;
				}
				.stats-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 2.2rem;
				}
				.add-icon {
					color: ${({ theme }) => theme.primaryColor};
					font-size: 2.2rem;
				}
			}
			p {
				/* text-align: right; */
				/* color: ${({ theme }) => theme.txtGrey}; */
				font-size: 2rem;
				strong {
					color: ${({ theme }) => theme.secondaryColor};
					/* font-size: 1.8rem; */
				}
			}
			p.key-name {
				margin: 0;
				font-size: 1.4rem;
				/* color: ${({ theme }) => theme.secondaryColor}; */
				color: ${({ theme }) => theme.txtGrey};
				text-transform: capitalize;
				/* line-height: 0.8; */
			}
		}
	}
`;

export default KeyWidget;
