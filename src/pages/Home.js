import { useEffect } from 'react';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import { useTargetsContext } from '../hooks/useTargetsContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import CountdownWidget from '../components/CountdownWidget';
// import InviteWidget from '../components/InviteWidget';
// import GigsList from '../components/GigsList';
// import GigCard from '../components/GigCard';
import GigsListNextFive from '../components/GigsListNextFive';
// import GigCounterWidget from '../components/GigCounterWidget';
import TopBandWidget from '../components/TopBandWidget';
// import ChartWidget from '../components/ChartWidget';
import GigTotalWidget from '../components/GigTotalWidget';
import PieWidget from '../components/PieWidget';
// import NextGigCountdownWidget from '../components/NextGigCountdownWidget';

// components
// import WeightDetails from '../components/WeightDetails';
// import WeightForm from '../components/GigForm';
// import TargetForm from '../components/TargetForm';
// import TargetDetails from '../components/TargetDetails';
// import CountdownWidget from '../components/CountdownWidget';
// import ProgressWidget from '../components/ProgressWidget';
// import ChartWidget from '../components/ChartWidget';
// import ProgressBarWidget from '../components/ProgressBarWidget';
// import TargetForm from '../components/TargetForm';
// import ShareWidget from '../components/ShareWidget';

const Home = () => {
	// const [workouts, setWorkouts] = useState(null);
	// const { next_gig, dispatch } = useGigsContext();
	// const { next_five_gigs, dispatch } = useGigsContext();
	const { gigCounterData, dispatch } = useGigsContext();
	// const { gigs, next_gig, dispatch } = useGigsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		// const fetchGigs = async () => {
		// 	const response = await fetch(
		// 		`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
		// 		{
		// 			// const response = await fetch('/api/weights', {
		// 			headers: {
		// 				Authorization: `Bearer ${user.token}`,
		// 			},
		// 		}
		// 	);
		// 	const json = await response.json();

		// 	if (response.ok) {
		// 		// setWorkouts(json);
		// 		dispatch({
		// 			type: 'SET_GIGS',
		// 			payload: json,
		// 		});
		// 	}
		// };
		const fetchGigCounterData = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
				{
					// const response = await fetch('/api/weights', {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_GIG_COUNTER_DATA',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			// fetchGigs();
			fetchGigCounterData();
		}
	}, [dispatch, user]);

	console.log(gigCounterData, 'gig counter data');

	// useEffect(() => {
	// 	// const fetchGigs = async () => {
	// 	// 	const response = await fetch(
	// 	// 		`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
	// 	// 		{
	// 	// 			// const response = await fetch('/api/weights', {
	// 	// 			headers: {
	// 	// 				Authorization: `Bearer ${user.token}`,
	// 	// 			},
	// 	// 		}
	// 	// 	);
	// 	// 	const json = await response.json();

	// 	// 	if (response.ok) {
	// 	// 		// setWorkouts(json);
	// 	// 		dispatch({
	// 	// 			type: 'SET_GIGS',
	// 	// 			payload: json,
	// 	// 		});
	// 	// 	}
	// 	// };
	// 	const fetchNextFiveGigs = async () => {
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
	// 				type: 'SET_NEXT_FIVE_GIGS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		// fetchGigs();
	// 		fetchNextFiveGigs();
	// 	}
	// }, [dispatch, user]);

	return (
		<StyledHome
			className='home'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <TargetForm /> */}

			{/* {<GigForm />} */}
			{/* <p>
				{gigs && gigs.length}
				<span>x gig count</span>
			</p> */}

			{/* {gigs && gigs[0] && <NextGigCountdownWidget gig={gigs[0]} />} */}
			{/* {gigs && gigs[0] && (
				<CountdownWidget
					gig={
						gigs
							.sort((a, b) => {
								return new Date(b.gig_date) - new Date(a.gig_date);
							})
							.filter((gig) => {
								return (
									new Date(gig.gig_date) > new Date() ||
									new Date(gig.gig_date) === new Date()
								);
							})
							.sort((a, b) => {
								return new Date(a.gig_date) - new Date(b.gig_date);
							})[0]
					}
				/>
			)} */}
			{gigCounterData && (
				<CountdownWidget gig={gigCounterData.next_five_gigs[0]} />
			)}
			{gigCounterData && (
				<div className='stat-container'>
					<TopBandWidget gigCounterData={gigCounterData} />
					<GigTotalWidget gigCounterData={gigCounterData} />
				</div>
			)}
			{/* {gigCounterData && <TopBandWidget gigCounterData={gigCounterData} />} */}
			{gigCounterData && <PieWidget gigs={gigCounterData.all_gigs} />}
			{/* {gigCounterData && <ChartWidget gigs={gigCounterData.all_gigs} />} */}
			{/* {gigCounterData && <GigCounterWidget gigCounterData={gigCounterData} />} */}
			{/* {next_five_gigs && <InviteWidget gig={next_five_gigs[0]} />} */}
			<p className='next-five-list-header'>Coming Up</p>
			{gigCounterData && (
				<GigsListNextFive gigs={gigCounterData.next_five_gigs} />
			)}
			{/* {next_five_gigs &&
				next_five_gigs.map((gig) => <GigCard key={gig.createdAt} gig={gig} />)} */}
			{/* (
				<>
					<p className='next-five-list-header'>Upcoming gigs</p>
					<GigsList gigs={next_five_gigs} />
				</>
			)} */}
			{/* {next_five_gigs && (
				<>
					<p className='next-five-list-header'>Upcoming gigs</p>
					<GigsList gigs={next_five_gigs} />
				</>
			)} */}
			{/* {next_gig && <CountdownWidget gig={next_gig} />} */}
			{/* {gigs && gigs[0] && <CountdownWidget gig={gigs[0]} />} */}
			{/* {gigs && gigs[0] && <InviteWidget gig={gigs[0]} />} */}

			{/* {targets && targets.length === 1 && weights && weights.length >= 1 && (
				<>
					{targets &&
						targets.map((target) => (
							<CountdownWidget key={target._id} target={target} />
						))}
				

					{targets &&
						weights &&
						targets.map((target) => (
							<ProgressWidget
								key={target._id}
								target={target}
								weights={weights}
							/>
						))}
					{targets && weights && (
						<ShareWidget targets={targets} weights={weights} />
					)}
					{targets && weights && (
						<ProgressBarWidget
							percentage={percentage}
							targets={targets}
							weights={weights}
						/>
					)}
					{targets && weights && (
						<ChartWidget targets={targets} weights={weights} />
					)}
				</>
			)} */}
		</StyledHome>
	);
};
const StyledHome = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	.stat-container {
		display: flex;
		justify-content: space-between;
		column-gap: 1rem;
	}
	.instruction-title {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
	}
	.next-five-list-header {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	}
`;

export default Home;
