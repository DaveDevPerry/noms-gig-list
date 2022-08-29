// import { useTargetsContext } from '../hooks/useTargetsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { formatDistance } from 'date-fns';
import styled from 'styled-components';
// import { useStateContext } from '../lib/context';
import VenuesPieChart from './VenuesPieChart';
// import GigLineChart from './GigLineChart';
// import WeightLineChart from './WeightLineChart';
// import { format } from 'date-fns';
// import { differenceInDays } from 'date-fns';

const VenuePieWidget = ({ venues, theme }) => {
	// const { totalGigsPerBand } = useStateContext();

	return (
		<StyledVenuePieWidget className='chart-widget'>
			{/* <p>chart widget</p> */}
			<VenuesPieChart
				// themeToggler={themeToggler}
				theme={theme}
				venues={venues.sort((a, b) => b.value - a.value).slice(0, 5)}
			/>
		</StyledVenuePieWidget>
	);
};
const StyledVenuePieWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	/* padding: 1rem 2rem; */
	padding: 0.5rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	/* justify-content: space-between; */
	align-items: center;
	/* height: 12rem; */
	position: relative;
	/* row-gap: 0.5rem; */
	/* p {
		margin: 0;
		color: ${({ theme }) => theme.txtGrey};
		text-align: center;
	} */
`;

export default VenuePieWidget;
