// import { useTargetsContext } from '../hooks/useTargetsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { formatDistance } from 'date-fns';
import styled from 'styled-components';
import DecadeBarChart from './DecadeBarChart';
// import YearBarChart from './YearBarChart';
// import GigLineChart from './GigLineChart';
// import WeightLineChart from './WeightLineChart';
// import { format } from 'date-fns';
// import { differenceInDays } from 'date-fns';

const ChartDecadeWidget = ({ gigs }) => {
	return (
		<StyledChartDecadeWidget className='chart-widget'>
			{/* <p>chart widget</p> */}
			<DecadeBarChart gigs={gigs} />
		</StyledChartDecadeWidget>
	);
};
const StyledChartDecadeWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 0rem 1rem;
	/* padding: 1rem 2rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;

	position: relative;
	/* display: flex;
	flex-direction: column;
	justify-content: center; */
	/* row-gap: 0.5rem; */
	/* p {
		margin: 0;
		color: ${({ theme }) => theme.txtGrey};
		text-align: center;
	} */
`;

export default ChartDecadeWidget;
