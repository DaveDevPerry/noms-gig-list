// import { usegigsContext } from '../hooks/usegigsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { formatDistance } from 'date-fns';
import styled from 'styled-components';
import { format } from 'date-fns';
import { differenceInDays } from 'date-fns';

const CountdownWidget = ({ gig }) => {
	console.log(gig, 'countdown widget gig');
	return (
		<StyledCountdownWidget className='countdown-widget'>
			{/* {!gig.deadline_reason && <p>No gig reason</p>} */}
			{gig.headline_band && <p>{gig.headline_band}</p>}
			<p>
				<strong>{format(new Date(gig.gig_date), 'dd/MM/yyyy')}</strong>
			</p>
			<p>in {differenceInDays(new Date(gig.gig_date), new Date())} days</p>
		</StyledCountdownWidget>
	);
};
const StyledCountdownWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* row-gap: 0.5rem; */
	p {
		margin: 0;
		color: ${({ theme }) => theme.txtGrey};
		text-align: center;
	}
`;

export default CountdownWidget;
