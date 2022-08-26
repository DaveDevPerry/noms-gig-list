import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BandPieChart = ({ gigs }) => {
	const options = {
		responsive: true,
		aspectRatio: 3,
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
				display: false,
				text: 'gigs timeline',
				position: 'top',
			},
		},
	};

	const bandNames = gigs
		.map(function (obj) {
			return obj.bandName;
		})
		.slice(0, 3);

	const gigCount = gigs
		.map(function (obj) {
			return obj.totalGigCount;
		})
		.slice(0, 3);

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
					'#1aac83',
					// 'rgba(75, 192, 192)',
					'rgb(250, 186, 11)',
					// 'rgba(255, 206, 86)',
					'rgba(54, 162, 235)',
					// 'rgba(75, 192, 192, 0.2)',
					// 'rgba(255, 206, 86, 0.2)',
					// 'rgba(54, 162, 235, 0.2)',
					// 'rgba(255, 99, 132, 0.2)',
					// 'rgba(153, 102, 255, 0.2)',
					// 'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'#ffffff',
					'#ffffff',
					'#ffffff',
					// 'rgba(255, 206, 86, 1)',
					// 'rgba(54, 162, 235, 1)',
					// 'rgba(255, 99, 132, 1)',
					// 'rgba(153, 102, 255, 1)',
					// 'rgba(255, 159, 64, 1)',
				],
				borderWidth: 2,
				// backgroundColor: [
				// 	'rgba(75, 192, 192, 0.2)',
				// 	'rgba(255, 206, 86, 0.2)',
				// 	'rgba(54, 162, 235, 0.2)',
				// 	// 'rgba(255, 99, 132, 0.2)',
				// 	// 'rgba(153, 102, 255, 0.2)',
				// 	// 'rgba(255, 159, 64, 0.2)',
				// ],
				// borderColor: [
				// 	'rgba(75, 192, 192, 1)',
				// 	'rgba(255, 206, 86, 1)',
				// 	'rgba(54, 162, 235, 1)',
				// 	// 'rgba(255, 99, 132, 1)',
				// 	// 'rgba(153, 102, 255, 1)',
				// 	// 'rgba(255, 159, 64, 1)',
				// ],
				// borderWidth: 1,
			},
		],
	};

	// export function App() {
	return <Pie data={data} options={options} />;
};

export default BandPieChart;
