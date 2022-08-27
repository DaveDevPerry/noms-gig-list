import { useEffect } from 'react';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import GigsList from '../components/GigsList';
// import { FaUsers } from 'react-icons/fa';
import { BsMusicNoteList } from 'react-icons/bs';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import HistoryWidget from '../components/HistoryWidget';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';

const History = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { previous_gigs, dispatch } = useGigsContext();
	// const { gigs, dispatch } = useGigsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		// log(lastDrawDate, 'last draw data');
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

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

			// get future gigs only
			// log(json, 'json set gigs');
			// const upcomingGigs = json.sort((a, b) => {
			// 	return new Date(a.gig_date) - new Date(b.gig_date);
			// });
			// log(upcomingGigs, 'upcoming');
			// const upcomingGigsSort = json.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });
			// log(upcomingGigsSort, 'upcoming');
			// const filtered = upcomingGigsSort.filter((gig) => {
			// 	return new Date(gig.gig_date) < new Date();
			// });
			// log(filtered, 'filtered');

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_PREVIOUS_GIGS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGigs();
		}
	}, [dispatch, user]);

	return (
		<StyledHistory
			className='gigs-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* {previous_gigs && <HistoryWidget gigs={previous_gigs} />} */}
			{/* {gigs && <HistoryWidget gigs={gigs} />} */}
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			{/* <p className='gig-history-list-header'>History</p> */}
			<div className='gig-history-list-header'>
				<p>History</p>
				<div>
					{/* <FaUsers className='nav-icon' />x */}
					<BsMusicNoteList className='nav-icon' />
					{previous_gigs && previous_gigs.length}
					{/* {previous_gigs.length && previous_gigs.length < 10
						? `0${previous_gigs.length}`
						: previous_gigs.length} */}
				</div>
			</div>
			<GigsList gigs={previous_gigs} />
			{/* <GigsList gigs={gigs} /> */}
		</StyledHistory>
	);
};
const StyledHistory = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	flex: 1;
	max-width: 42rem;
	padding: 0 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	margin: 0 auto;
	.gig-history-list-header {
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
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
			font-size: 1.4rem;
			font-weight: bolder;
			/* font-size: 0.7em; */
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 1.6rem;
			}
		}
	}
`;

export default History;
