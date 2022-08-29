import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import { log } from '../helper';

ChartJS.register(ArcElement, Tooltip, Legend);

const VenuesPieChart = ({ venues, theme }) => {
	// log(themeToggler, theme, 'themeToggler and theme');

	const borderFromTheme = theme === 'light' ? '#ffffff' : '#040404';

	const options = {
		responsive: false,
		// aspectRatio: 3,
		// maintainAspectRatio: true,
		plugins: {
			legend: {
				position: 'left',
				// labels: {
				// 	color: 'blue',
				// 	// fontSize: 18,
				// },
				// display: false,
			},
			title: {
				display: true,
				text: 'most attended venues',
				align: 'end',
				position: 'top',
			},
		},
	};

	const clonedNames = [...venues];
	const venueNames = clonedNames
		.map(function (obj) {
			return `${obj.venueName} ${obj.cityName}`;
		})
		.slice(0, 5);

	const clonedVenues = [...venues];
	const venueCount = clonedVenues
		.map(function (obj) {
			return obj.venueCount;
		})
		.slice(0, 5);

	const data = {
		labels: venueNames,
		datasets: [
			{
				label: '# of venues',
				data: venueCount,
				backgroundColor: [
					'#1aac83',
					'rgb(250, 186, 11)',
					'rgb(158, 11, 250)',
					'rgb(54, 162, 235)',
					'rgb(250, 11, 234)',
				],
				borderColor: [
					borderFromTheme,
					borderFromTheme,
					borderFromTheme,
					borderFromTheme,
					borderFromTheme,
				],
				borderWidth: 2,
			},
		],
	};
	return <Pie data={data} options={options} />;
};

export default VenuesPieChart;
