// import { useEffect } from 'react';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useBandsContext } from '../hooks/useBandsContext';

// components
// import GigsList from '../components/GigsList';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';

const Bands = () => {
	// const [workouts, setWorkouts] = useState(null);
	// const { gigs, dispatch } = useGigsContext();
	const { bands, dispatch } = useBandsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchBands = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
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
					type: 'SET_BANDS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchBands();
		}
	}, [dispatch, user]);

	return (
		<StyledBands
			className='bands-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			{/* <GigsList gigs={gigs} /> */}
			<p>BAND PAGE</p>
			{bands && bands.map((band) => <p key={band._id}>{band.name}</p>)}
		</StyledBands>
	);
};
const StyledBands = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* overflow-y: auto; */
	/* border: 2px solid red; */
`;

export default Bands;
