import React from 'react';
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

const BandRadarChart = ({ venues, theme }) => {
	// log(themeToggler, theme, 'themeToggler and theme');

	// const borderFromTheme = theme === 'light' ? '#ffffff' : '#040404';

	const options = {
		responsive: false,
		// aspectRatio: 3,
		// maintainAspectRatio: true,
		plugins: {
			legend: {
				position: 'left',
				labels: {
					color: 'blue',
					// fontSize: 18,
				},
				display: false,
			},
			title: {
				display: false,
				text: 'most attended venues',
				align: 'end',
				position: 'top',
			},
		},
		animation: {
			duration: 3000,
		},
	};

	// const clonedNames = [...venues];
	// const venueNames = clonedNames
	// 	.map(function (obj) {
	// 		return `${obj.venueName} ${obj.cityName}`;
	// 	})
	// 	.slice(0, 5);

	// const clonedVenues = [...venues];
	// const venueCount = clonedVenues
	// 	.map(function (obj) {
	// 		return obj.venueCount;
	// 	})
	// 	.slice(0, 5);

	const data = {
		labels: ['Gigs', 'Headline', 'Support', 'Festivals', 'Cities', 'Venues'],
		datasets: [
			{
				label: '# of Votes',
				data: [4, 3, 0, 2, 3, 3],
				// data: [2, 9, 3, 5, 2, 3],
				borderColor: 'rgb(38, 151, 244)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
				// backgroundColor: 'rgba(255, 99, 132, 0.2)',
				// borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			},
		],
		// labels: venueNames,
		// datasets: [
		// 	{
		// 		label: '# of venues',
		// 		data: venueCount,
		// 		backgroundColor: [
		// 			'#1aac83',
		// 			'rgb(250, 186, 11)',
		// 			'rgb(158, 11, 250)',
		// 			'rgb(54, 162, 235)',
		// 			'rgb(250, 11, 234)',
		// 		],
		// 		borderColor: [
		// 			borderFromTheme,
		// 			borderFromTheme,
		// 			borderFromTheme,
		// 			borderFromTheme,
		// 			borderFromTheme,
		// 		],
		// 		borderWidth: 2,
		// 	},
		// ],
	};
	// return <Radar data={data} />;
	return <Radar data={data} options={options} />;
};

export default BandRadarChart;
