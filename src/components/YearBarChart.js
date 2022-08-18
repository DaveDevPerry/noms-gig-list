import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const YearBarChart = ({ gigs }) => {
	// export const data = {
	// 	labels,
	// 	datasets: [
	// 		{
	// 			label: 'Dataset 1',
	// 			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
	// 			backgroundColor: 'rgba(255, 99, 132, 0.5)',
	// 		},
	// 		{
	// 			label: 'Dataset 2',
	// 			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
	// 			backgroundColor: 'rgba(53, 162, 235, 0.5)',
	// 		},
	// 	],
	// };

	const options = {
		responsive: false,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: 'gigs per decade',
			},
		},
	};

	// const labels = [
	// 	'January',
	// 	'February',
	// 	'March',
	// 	'April',
	// 	'May',
	// 	'June',
	// 	'July',
	// ];

	// const dateLabels = gigs.map((gig) =>
	// 	new Date(gig.gig_date).toLocaleDateString().slice(0, 5)
	// );

	const data = {
		// labels: dateLabels,
		// labels: gigs.map((a) => a.createdA),
		labels: ["70's", "80's", "90's", "00's", "10's", "20's"],
		datasets: [
			{
				categoryPercentage: 1, // notice here
				barPercentage: 0.9, // notice here
				label: 'Band',
				// data: gigs.map((a) => a.headline_band),
				data: [100, 115, 200, 350, 523, 201],
				// data: labels.map(() =>
				// 	faker.datatype.number({ min: -1000, max: 1000 })
				// ),
				borderColor: 'rgb(38, 151, 244)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
			},
			// {
			// 	label: 'Dataset 2',
			// 	data: labels.map(() =>
			// 		faker.datatype.number({ min: -1000, max: 1000 })
			// 	),
			// 	borderColor: 'rgb(53, 162, 235)',
			// 	backgroundColor: 'rgba(53, 162, 235, 0.5)',
			// },
		],
	};

	return <Bar options={options} data={data} />;
};

export default YearBarChart;
