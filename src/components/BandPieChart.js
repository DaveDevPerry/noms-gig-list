import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { log } from '../helper';

ChartJS.register(ArcElement, Tooltip, Legend);

const BandPieChart = ({ gigs, themeToggler, theme }) => {
	log(themeToggler, theme, 'themeToggler and theme');

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
				text: 'bands seen the most times',
				align: 'end',
				position: 'top',
			},
		},
		animation: {
			duration: 3000,
		},
	};

	const bandNames = gigs
		.map(function (obj) {
			return obj.bandName;
		})
		.slice(0, 5);

	const gigCount = gigs
		.map(function (obj) {
			return obj.totalGigCount;
		})
		.slice(0, 5);

	const data = {
		labels: bandNames,
		datasets: [
			{
				label: '# of gigs',
				data: gigCount,
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

export default BandPieChart;
