import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BandPieChart = ({ gigs }) => {
	const options = {
		responsive: false,
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
				display: false,
				text: 'gigs timeline',
				position: 'top',
			},
		},
	};

	const bandNames = gigs.map(function (obj) {
		return obj.key;
	});

	const gigCount = gigs.map(function (obj) {
		return obj.value;
	});

	const data = {
		labels: bandNames,
		// labels: [
		// 	'terrorvision',
		// 	'slade',
		// 	'motorhead',
		// 	'led zeppelin',
		// 	'deep purple',
		// 	'saxon',
		// ],
		datasets: [
			{
				label: '# of gigs',
				data: gigCount,
				// data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	// export function App() {
	return <Pie data={data} options={options} />;
};

export default BandPieChart;
