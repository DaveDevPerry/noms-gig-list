import { useEffect } from 'react';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import GigsList from '../components/GigsList';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';

const Gigs = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { gigs, dispatch } = useGigsContext();
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
			console.log(json, 'json set gigs');
			const upcomingGigs = json.sort((a, b) => {
				return new Date(b.gig_date) - new Date(a.gig_date);
			});
			console.log(upcomingGigs, 'upcoming');
			const upcomingGigsSort = json.sort((a, b) => {
				return new Date(a.gig_date) - new Date(b.gig_date);
			});
			console.log(upcomingGigsSort, 'upcoming');
			const filtered = upcomingGigsSort.filter((gig) => {
				return (
					new Date(gig.gig_date) > new Date() ||
					new Date(gig.gig_date) === new Date()
				);
			});
			console.log(filtered, 'filtered');

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_GIGS',
					payload: filtered,
					// payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGigs();
		}
	}, [dispatch, user]);

	return (
		<StyledGigs
			className='gigs-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			<p className='next-five-list-header'>Upcoming gigs</p>
			<GigsList gigs={gigs} />
		</StyledGigs>
	);
};
const StyledGigs = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	.next-five-list-header {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	}
`;

export default Gigs;
