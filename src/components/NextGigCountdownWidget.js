import React, { useEffect } from 'react';
import styled from 'styled-components';

const NextGigCountdownWidget = () => {
	useEffect(() => {
		// const countdown = () => {
		// 	const countDate = new Date('Aug 17, 2022 21:00:00').getTime();
		// 	log(countDate);
		// 	const now = new Date().getTime();
		// 	const gap = countDate - now;
		// 	const second = 1000;
		// 	const minute = second * 60;
		// 	const hour = minute * 60;
		// 	const day = hour * 24;
		// 	const textDay = Math.floor(gap / day);
		// 	const textHour = Math.floor((gap % day) / hour);
		// 	const textMinute = Math.floor((gap % hour) / minute);
		// 	const textSecond = Math.floor((gap % minute) / second);
		// 	document.querySelector('.day').innerText = textDay;
		// 	document.querySelector('.hour').innerText = textHour;
		// 	document.querySelector('.minute').innerText = textMinute;
		// 	document.querySelector('.second').innerText = textSecond;
		// };
		// setInterval(countdown, 1000);
	}, []);

	// const countDate = new Date('Aug 17, 2022 21:00:00').getTime();
	// 	log(countDate);
	// 	const now = new Date().getTime();
	// 	const gap = countDate - now;

	// 	const second = 1000;
	// 	const minute = second * 60;
	// 	const hour = minute * 60;
	// 	const day = hour * 24;

	// 	const textDay = Math.floor(gap / day);
	// 	const textHour = Math.floor((gap % day) / hour);
	// 	const textMinute = Math.floor((gap % hour) / minute);
	// 	const textSecond = Math.floor((gap % minute) / second);

	// 	document.querySelector('.day').innerText = textDay;
	// 	document.querySelector('.hour').innerText = textHour;
	// 	document.querySelector('.minute').innerText = textMinute;
	// 	document.querySelector('.second').innerText = textSecond;

	return (
		<StyledNextGigCountdownWidget className='countdown-container'>
			<div className='clock-wrapper coming-soon'>
				<div className='soon-wrapper'>
					<h3 className='center tv-font'>Terrorvision</h3>

					<div className='countdown'>
						<div className='container-day'>
							{/* <h3 className="day">{textDay}</h3> */}
							<p className='day'></p>
							<h3 className='timer-text'>Days</h3>
						</div>
						<div className='container-hour'>
							{/* <h3 className="hour">{textHour}</h3> */}
							<p className='hour'></p>
							<h3 className='timer-text'>Hours</h3>
						</div>
						<div className='container-minute'>
							{/* <h3 className="minute">{textMinute}</h3> */}
							<p className='minute'></p>
							<h3 className='timer-text'>Minute</h3>
						</div>
						<div className='container-second'>
							{/* <h3 className="second">{textSecond}</h3> */}
							<p className='second'></p>
							<h3 className='timer-text'>Seconds</h3>
						</div>
					</div>
					<p className='center'>KKs, Wolverhampton</p>
					<p>gig date</p>
				</div>
			</div>
		</StyledNextGigCountdownWidget>
	);
};
const StyledNextGigCountdownWidget = styled.div`
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
	.countdown {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	p {
		margin: 0;
		color: ${({ theme }) => theme.txtGrey};
		text-align: center;
	}
`;

export default NextGigCountdownWidget;
