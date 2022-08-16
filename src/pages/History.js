import { useEffect } from 'react';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import GigsList from '../components/GigsList';
import HistoryWidget from '../components/HistoryWidget';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';

const History = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { previous_gigs, dispatch } = useGigsContext();
	// const { gigs, dispatch } = useGigsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

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
			// console.log(json, 'json set gigs');
			// const upcomingGigs = json.sort((a, b) => {
			// 	return new Date(a.gig_date) - new Date(b.gig_date);
			// });
			// console.log(upcomingGigs, 'upcoming');
			// const upcomingGigsSort = json.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });
			// console.log(upcomingGigsSort, 'upcoming');
			// const filtered = upcomingGigsSort.filter((gig) => {
			// 	return new Date(gig.gig_date) < new Date();
			// });
			// console.log(filtered, 'filtered');

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
			{previous_gigs && <HistoryWidget gigs={previous_gigs} />}
			{/* {gigs && <HistoryWidget gigs={gigs} />} */}
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			<p className='gig-history-list-header'>History</p>
			<GigsList gigs={previous_gigs} />
			{/* <GigsList gigs={gigs} /> */}
		</StyledHistory>
	);
};
const StyledHistory = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	.gig-history-list-header {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	}
`;

export default History;
