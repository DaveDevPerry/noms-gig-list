// import { useTargetsContext } from '../hooks/useTargetsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { formatDistance } from 'date-fns';
import styled from 'styled-components';
// import GigLineChart from './GigLineChart';
import YearLineChart from './YearLineChart';
// import WeightLineChart from './WeightLineChart';
// import { format } from 'date-fns';
// import { differenceInDays } from 'date-fns';

const DynamicDecadesChartWidget = ({ gigs, theme }) => {
	return (
		<StyledDynamicDecadesChartWidget className='chart-widget'>
			{/* <p>chart widget</p> */}
			<YearLineChart gigs={gigs} theme={theme} />
			{/* <GigLineChart gigs={gigs} /> */}
		</StyledDynamicDecadesChartWidget>
	);
};
const StyledDynamicDecadesChartWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 0 1rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	/* display: flex;

	justify-content: center;
	align-items: center; */
	position: relative;
	flex: 1;
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

export default DynamicDecadesChartWidget;
