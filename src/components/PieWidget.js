// import { useTargetsContext } from '../hooks/useTargetsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { formatDistance } from 'date-fns';
import styled from 'styled-components';
import BandPieChart from './BandPieChart';
// import GigLineChart from './GigLineChart';
// import WeightLineChart from './WeightLineChart';
// import { format } from 'date-fns';
// import { differenceInDays } from 'date-fns';

const PieWidget = ({ gigs }) => {
	return (
		<StyledPieWidget className='chart-widget'>
			{/* <p>chart widget</p> */}
			<BandPieChart gigs={gigs} />
		</StyledPieWidget>
	);
};
const StyledPieWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 2rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	/* row-gap: 0.5rem; */
	/* p {
		margin: 0;
		color: ${({ theme }) => theme.txtGrey};
		text-align: center;
	} */
`;

export default PieWidget;
