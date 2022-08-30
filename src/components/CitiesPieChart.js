import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import { log } from '../helper';

ChartJS.register(ArcElement, Tooltip, Legend);

const CitiesPieChart = ({ cities, theme }) => {
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
				text: 'cities visited the most',
				align: 'end',
				position: 'top',
			},
		},
	};

	const clonedNames = [...cities];
	const sortNames = clonedNames.sort((a, b) => b.value - a.value).slice(0, 5);
	const cityNames = sortNames
		.map(function (obj) {
			return obj.key;
		})
		.slice(0, 5);

	const clonedCities = [...cities];
	const sortCities = clonedCities.sort((a, b) => b.value - a.value).slice(0, 5);
	const cityCount = sortCities
		.map(function (obj) {
			return obj.value;
		})
		.slice(0, 5);
	// const clonedNames = [...cities];
	// const sortCities = clonedNames.sort((a, b) => b.value - a.value).slice(0, 5)
	// const cityNames = clonedNames
	// 	.map(function (obj) {
	// 		return obj.key;
	// 	})
	// 	.slice(0, 5);

	// const clonedCities = [...cities];
	// const cityCount = clonedCities
	// 	.map(function (obj) {
	// 		return obj.value;
	// 	})
	// 	.slice(0, 5);

	const data = {
		labels: cityNames,
		datasets: [
			{
				label: '# of cities',
				data: cityCount,
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

export default CitiesPieChart;
