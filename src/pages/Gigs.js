import { useEffect } from 'react';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { BsMusicNoteList } from 'react-icons/bs';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import GigsList from '../components/GigsList';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { log } from '../helper';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';

const Gigs = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { upcoming_gigs, dispatch } = useGigsContext();
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
			log(json, 'json set gigs');
			const clonedGigs = [...json];
			const upcomingGigs = clonedGigs.sort((a, b) => {
				return new Date(b.gig_date) - new Date(a.gig_date);
			});
			log(upcomingGigs, 'upcoming');
			const upcomingGigsSort = json.sort((a, b) => {
				return new Date(a.gig_date) - new Date(b.gig_date);
			});
			log(upcomingGigsSort, 'upcoming');
			const filtered = upcomingGigsSort.filter((gig) => {
				return (
					new Date(gig.gig_date) > new Date() ||
					new Date(gig.gig_date) === new Date()
				);
			});
			log(filtered, 'filtered');

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_UPCOMING_GIGS',
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
			{/* <p className='upcoming-gigs-list-header'>Upcoming gigs</p> */}
			<div className='upcoming-gigs-list-header'>
				<p>Upcoming gigs</p>
				<div>
					<BsMusicNoteList className='nav-icon' />x
					{upcoming_gigs && upcoming_gigs.length}
				</div>
			</div>
			<GigsList gigs={upcoming_gigs} />
			{/* <GigsList gigs={gigs} /> */}
		</StyledGigs>
	);
};
const StyledGigs = styled(motion.div)`
	display: flex;
	flex-direction: column;
	/* row-gap: 1rem; */
	row-gap: 0.3rem;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	/* border: 2px solid red; */
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
	.upcoming-gigs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 1rem;
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
		}
	}
`;

export default Gigs;
