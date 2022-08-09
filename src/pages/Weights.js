import { useEffect } from 'react';
import { useWeightsContext } from '../hooks/useWeightsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
// import WeightDetails from '../components/WeightDetails';
// import WeightForm from '../components/WeightForm';
// import TargetForm from '../components/TargetForm';
// import TargetDetails from '../components/TargetDetails';
// import CountdownWidget from '../components/CountdownWidget';
// import ProgressWidget from '../components/ProgressWidget';
import WeightsList from '../components/WeightsList';

const Weights = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { weights, dispatch } = useWeightsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchWeights = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/weights`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_WEIGHTS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchWeights();
		}
	}, [dispatch, user]);
	// useEffect(() => {
	// 	const fetchTargets = async () => {
	// 		const response = await fetch('/api/targets', {
	// 			headers: {
	// 				Authorization: `Bearer ${user.token}`,
	// 			},
	// 		});
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

	return (
		<StyledWeights
			className='weights-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}

			<WeightsList weights={weights} />
		</StyledWeights>
	);
};
const StyledWeights = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* border: 2px solid red; */
`;

export default Weights;
