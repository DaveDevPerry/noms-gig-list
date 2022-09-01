import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const YearLineChart = ({ gigs }) => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
			},
			title: {
				display: true,
				text: 'total gigs each year per decade',
			},
		},
		animation: {
			duration: 3000,
		},
	};

	// const options = {
	// 	responsive: true,
	// 	plugins: {
	// 		legend: {
	// 			position: 'top' as const,
	// 		},
	// 		title: {
	// 			display: true,
	// 			text: 'Chart.js Line Chart',
	// 		},
	// 	},
	// };

	// const data = {
	// 	labels,
	// 	datasets: [
	// 		{
	// 			label: 'Dataset 1',
	// 			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
	// 			borderColor: 'rgb(255, 99, 132)',
	// 			backgroundColor: 'rgba(255, 99, 132, 0.5)',
	// 		},
	// 		{
	// 			label: 'Dataset 2',
	// 			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
	// 			borderColor: 'rgb(53, 162, 235)',
	// 			backgroundColor: 'rgba(53, 162, 235, 0.5)',
	// 		},
	// 	],
	// };

	const data = {
		// labels: dateLabels,
		// labels: gigs.map((a) => a.createdA),
		labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		datasets: [
			{
				label: "70's",
				data: [100, 115, 600, 310, 523, 101, 800, 350, 223, 201],
				borderColor: 'rgb(244, 196, 38)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
			},
			{
				label: "80's",
				data: [200, 225, 200, 380, 723, 202, 200, 350, 323, 202],
				borderColor: 'rgb(79, 244, 38)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
			},
			{
				label: "90's",
				data: [300, 335, 300, 360, 529, 303, 700, 350, 523, 203],
				borderColor: 'rgb(55, 38, 244)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
			},
			{
				label: "00's",
				data: [400, 445, 500, 320, 623, 804, 600, 350, 823, 204],
				borderColor: 'rgb(244, 38, 241)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
			},
			{
				label: "10's",
				data: [500, 555, 100, 370, 323, 405, 400, 350, 623, 205],
				borderColor: 'rgb(244, 38, 134)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
			},
			{
				label: "20's",
				data: [600, 665, 400, 390, 423, 706, 500, 350, 723, 206],
				borderColor: 'rgb(244, 241, 38)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
			},
			// {
			// 	label: 'Band',
			// 	// data: gigs.map((a) => a.headline_band),
			// 	data: [100, 115, 200, 350, 523, 201],
			// 	// data: labels.map(() =>
			// 	// 	faker.datatype.number({ min: -1000, max: 1000 })
			// 	// ),
			// 	borderColor: 'rgb(38, 151, 244)',
			// 	backgroundColor: 'rgba(99, 133, 255, 0.5)',
			// },
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

	return <Line options={options} data={data} />;
};

export default YearLineChart;
