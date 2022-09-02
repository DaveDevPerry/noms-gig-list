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
import { log } from '../helper';
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
	log(gigs, 'gigs in year line chart');
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: 'bottom',
			},
			title: {
				display: true,
				text: `total gigs each year in the ${gigs && gigs.fullDecade}.`,
				// text: 'total gigs each year per decade',
			},
		},
		animation: {
			duration: 3000,
		},
		scales: {
			y: {
				suggestedMin: 0,
				suggestedMax: 400,
			},
			// yAxes: [
			// 	{
			// 		display: true,
			// 		ticks: {
			// 			suggestedMin: 0, // minimum will be 0, unless there is a lower value.
			// 			// OR //
			// 			beginAtZero: true, // minimum value will be 0.
			// 		},
			// 	},
			// ],
		},
	};

	// ADD TOTAL BANDS SEEN EACH YEAR ALSO
	const data = {
		labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		// labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
		datasets: [
			{
				label: gigs && gigs.decade,
				data: gigs && gigs.gigCountPerYear,
				// data: [200, 225, 200, 380, 423, 202, 200, 350, 323, 202],
				// borderColor: '#1aac83',
				// backgroundColor: '#1aac83',
				// borderColor: 'rgb(38, 151, 244)',
				borderColor: 'rgba(99, 133, 255, 0.5)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
				// backgroundColor: '#156d01',
			},
		],
	};

	// static data
	// const data = {

	// 	labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	// 	datasets: [
	// 		{
	// 			label: "70's",
	// 			data: [100, 115, 600, 310, 523, 101, 800, 350, 223, 201],
	// 			borderColor: 'rgb(244, 196, 38)',
	// 			backgroundColor: 'rgba(99, 133, 255, 0.5)',
	// 		},
	// 		{
	// 			label: "80's",
	// 			data: [200, 225, 200, 380, 723, 202, 200, 350, 323, 202],
	// 			borderColor: 'rgb(79, 244, 38)',
	// 			backgroundColor: 'rgba(99, 133, 255, 0.5)',
	// 		},
	// 		{
	// 			label: "90's",
	// 			data: [300, 335, 300, 360, 529, 303, 700, 350, 523, 203],
	// 			borderColor: 'rgb(55, 38, 244)',
	// 			backgroundColor: 'rgba(99, 133, 255, 0.5)',
	// 		},
	// 		{
	// 			label: "00's",
	// 			data: [400, 445, 500, 320, 623, 804, 600, 350, 823, 204],
	// 			borderColor: 'rgb(244, 38, 241)',
	// 			backgroundColor: 'rgba(99, 133, 255, 0.5)',
	// 		},
	// 		{
	// 			label: "10's",
	// 			data: [500, 555, 100, 370, 323, 405, 400, 350, 623, 205],
	// 			borderColor: 'rgb(244, 38, 134)',
	// 			backgroundColor: 'rgba(99, 133, 255, 0.5)',
	// 		},
	// 		{
	// 			label: "20's",
	// 			data: [600, 665, 400, 390, 423, 706, 500, 350, 723, 206],
	// 			borderColor: 'rgb(244, 241, 38)',
	// 			backgroundColor: 'rgba(99, 133, 255, 0.5)',
	// 		},
	// 	],
	// };

	return <Line options={options} data={data} />;
};

export default YearLineChart;
