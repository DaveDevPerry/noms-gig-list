import { useEffect } from 'react';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import { useTargetsContext } from '../hooks/useTargetsContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

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
	const { gigs, dispatch } = useGigsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchGigs = async () => {
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
					type: 'SET_GIGS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGigs();
		}
	}, [dispatch, user]);
	// useEffect(() => {
	// 	const fetchTargets = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/targets`,
	// 			{
	// 				// const response = await fetch('/api/targets', {
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			targetDispatch({
	// 				type: 'SET_TARGETS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchTargets();
	// 	}
	// }, [targetDispatch, user]);

	// const percentage = 20.345;

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
			<p>
				{gigs && gigs.length}
				<span>x gig count</span>
			</p>

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
	.instruction-title {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
	}
`;

export default Home;
