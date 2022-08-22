import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const GigsContext = createContext();

export const gigsReducer = (state, action) => {
	switch (action.type) {
		// WORKING
		// case 'SET_GIGS':
		// 	return {
		// 		gigData: {
		// 			all_gigs: action.payload,
		// 			bands: action.payload.map(({ headline_band }) => headline_band),
		// 			bandStats: action.payload
		// 				.map(({ headline_band }) => headline_band)
		// 				.reduce(function (count, currentValue) {
		// 					return (
		// 						count[currentValue]
		// 							? ++count[currentValue]
		// 							: (count[currentValue] = 1),
		// 						count
		// 					);
		// 				}, {}),
		// 		},
		// 	};
		case 'SET_GIGS':
			return {
				gigs: action.payload,
			};
		// case 'SET_BANDS_GIG_COUNT':
		// 	const clonedGigs = [...action.payload];
		// 	const gigCountObj = clonedGigs
		// 		// bandsGigCount: action.payload
		// 		.map(({ headline_band }) => headline_band)
		// 		.reduce(function (count, currentValue) {
		// 			return (
		// 				count[currentValue]
		// 					? ++count[currentValue]
		// 					: (count[currentValue] = 1),
		// 				count
		// 			);
		// 		}, {});
		// 	// convert object to array of key value pair objects
		// 	const gigCountArrOfObj = Object.entries(gigCountObj).map(
		// 		([key, value]) => ({
		// 			key,
		// 			value,
		// 		})
		// 	);
		// 	const sortBandsByGigCount = gigCountArrOfObj.sort((a, b) => {
		// 		return b.value - a.value;
		// 	});
		// 	return {
		// 		bandsGigCount: sortBandsByGigCount,
		// 	};
		// case 'SET_CITIES_GIG_COUNT':
		// 	const clonedGigsForCityCount = [...action.payload];
		// 	const citiesGigCountObj = clonedGigsForCityCount
		// 		// bandsGigCount: action.payload
		// 		.map(({ city }) => city)
		// 		.reduce(function (count, currentValue) {
		// 			return (
		// 				count[currentValue]
		// 					? ++count[currentValue]
		// 					: (count[currentValue] = 1),
		// 				count
		// 			);
		// 		}, {});
		// 	// convert object to array of key value pair objects
		// 	const citiesGigCountArrOfObj = Object.entries(citiesGigCountObj).map(
		// 		([key, value]) => ({
		// 			key,
		// 			value,
		// 		})
		// 	);
		// 	const sortCitiesByGigCount = citiesGigCountArrOfObj.sort((a, b) => {
		// 		return b.value - a.value;
		// 	});
		// 	return {
		// 		citiesGigCount: sortCitiesByGigCount,
		// 	};
		case 'SET_GLOBAL_STATS':
			const clonedGigs = [...action.payload];
			const gigCountObj = clonedGigs
				// bandsGigCount: action.payload
				.map(({ headline_band }) => headline_band)
				.reduce(function (count, currentValue) {
					return (
						count[currentValue]
							? ++count[currentValue]
							: (count[currentValue] = 1),
						count
					);
				}, {});
			// convert object to array of key value pair objects
			const gigCountArrOfObj = Object.entries(gigCountObj).map(
				([key, value]) => ({
					key,
					value,
				})
			);
			const sortBandsByGigCount = gigCountArrOfObj.sort((a, b) => {
				return b.value - a.value;
			});
			// cities
			const clonedGigsForCityCount = [...action.payload];
			const citiesGigCountObj = clonedGigsForCityCount
				// bandsGigCount: action.payload
				.map(({ city }) => city)
				.reduce(function (count, currentValue) {
					return (
						count[currentValue]
							? ++count[currentValue]
							: (count[currentValue] = 1),
						count
					);
				}, {});
			// convert object to array of key value pair objects
			const citiesGigCountArrOfObj = Object.entries(citiesGigCountObj).map(
				([key, value]) => ({
					key,
					value,
				})
			);
			const sortCitiesByGigCount = citiesGigCountArrOfObj.sort((a, b) => {
				return b.value - a.value;
			});
			// venues
			const clonedUniqueVenueCount = [...action.payload];
			// const arr = [
			// 	{
			// 					"id": "561",
			// 					"count": "1",
			// 					"month": 7
			// 			},
			// 			{
			// 					"id": "561",
			// 					"count": "1",
			// 					"month": 7
			// 			},
			// 			{
			// 					"id": "561",
			// 					"count": "-1",
			// 					"month": 8
			// 			},
			// 			{
			// 					"id": "561",
			// 					"count": "1",
			// 					"month": 9
			// 			},
			// 			{
			// 					"id": "561",
			// 					"count": "-1",
			// 					"month": 9
			// 			}
			// 	];

			// return (
			// 	count[currentValue]
			// 		? ++count[currentValue]
			// 		: (count[currentValue] = 1),
			// 	count
			// );

			const res = Object.values(
				clonedUniqueVenueCount.reduce(function (acc, item) {
					return (
						acc[`${item.venue}-${item.city}`]
							? ++acc[`${item.venue}-${item.city}`]
							: (acc[`${item.venue}-${item.city}`] = 1),
						acc
					);
					// acc[`${item.venue}-${item.city}`] = {
					// 	...acc[`${item.venue}-${item.city}`],
					// 	count: acc[`${item.venue}-${item.city}`] + item,
					// };
					// count: `${
					// 	parseInt(acc[`${item.venue}-${item.city}`].count) +
					// 	parseInt(item.count)
					// }`,
					// };
					// } else {
					// 	acc[`${item.venue}-${item.city}`] = item;
					// }
					// return acc;
				}, {})
			);
			log(res, 'res gig context');
			// const arr = [
			// 	{
			// 					"id": "561",
			// 					"count": "1",
			// 					"month": 7
			// 			},
			// 			{
			// 					"id": "561",
			// 					"count": "1",
			// 					"month": 7
			// 			},
			// 			{
			// 					"id": "561",
			// 					"count": "-1",
			// 					"month": 8
			// 			},
			// 			{
			// 					"id": "561",
			// 					"count": "1",
			// 					"month": 9
			// 			},
			// 			{
			// 					"id": "561",
			// 					"count": "-1",
			// 					"month": 9
			// 			}
			// 	];

			// const res = Object.values(arr.reduce((acc, item) => {
			// 	 if (acc[`${item.id}-${item.month}`]) {
			// 			acc[`${item.id}-${item.month}`] = {
			// 				...acc[`${item.id}-${item.month}`],
			// 				count: `${parseInt(acc[`${item.id}-${item.month}`].count) + parseInt(item.count)}`
			// 			}
			// 	 } else {
			// 		acc[`${item.id}-${item.month}`] = item;
			// 	 }
			// 	 return acc;
			// }, {}));
			// log(res);
			return {
				globalStatData: {
					bandsGigCount: sortBandsByGigCount,
					citiesGigCount: sortCitiesByGigCount,
					// venuesGigCount: sortVenuesByGigCount,
					// gigsPerDecadeCount: gigsdecade,
				},
			};

		case 'SET_GIG_COUNTER_DATA':
			return {
				gigCounterData: {
					all_gigs: action.payload,
					// bands: action.payload.map(({ headline_band }) => headline_band),
					previous_gig_count: action.payload
						.sort((a, b) => {
							return new Date(a.gig_date) - new Date(b.gig_date);
						})
						.filter((gig) => {
							return (
								new Date(gig.gig_date) < new Date() ||
								new Date(gig.gig_date) === new Date()
							);
						})
						.sort((a, b) => {
							return new Date(b.gig_date) - new Date(a.gig_date);
						}).length,
					upcoming_gig_count: action.payload
						.sort((a, b) => {
							return new Date(a.gig_date) - new Date(b.gig_date);
						})
						.filter((gig) => {
							return (
								new Date(gig.gig_date) > new Date() ||
								new Date(gig.gig_date) === new Date()
							);
						})
						.sort((a, b) => {
							return new Date(b.gig_date) - new Date(a.gig_date);
						}).length,
					next_five_gigs: action.payload
						.sort((a, b) => {
							return new Date(b.gig_date) - new Date(a.gig_date);
						})
						.filter((gig) => {
							return (
								new Date(gig.gig_date) > new Date() ||
								new Date(gig.gig_date) === new Date()
							);
						})
						.sort((a, b) => {
							return new Date(a.gig_date) - new Date(b.gig_date);
						})
						.splice(0, 4),
				},
			};
		case 'SET_GIG_COUNT_PER_BAND':
			// const gigCountObj = action.payload
			// .map(({ headline_band }) => headline_band)
			// .reduce(function (count, currentValue) {
			// 	return (
			// 		count[currentValue]
			// 			? ++count[currentValue]
			// 			: (count[currentValue] = 1),
			// 		count
			// 	);
			// }, {})
			return {
				band_gig_data: {
					gigs: action.payload,
					// bandStats:
					// ,
					bandStats: action.payload
						.map(({ headline_band }) => headline_band)
						.reduce(function (count, currentValue) {
							return (
								count[currentValue]
									? ++count[currentValue]
									: (count[currentValue] = 1),
								count
							);
						}, {}),
				},
			};
		case 'SET_NEXT_GIG':
			const next = [...action.payload];
			return {
				next_gig: next
					.sort((a, b) => {
						return new Date(b.gig_date) - new Date(a.gig_date);
					})
					.filter((gig) => {
						return (
							new Date(gig.gig_date) > new Date() ||
							new Date(gig.gig_date) === new Date()
						);
					})
					.sort((a, b) => {
						return new Date(a.gig_date) - new Date(b.gig_date);
					})[0],
			};
		case 'SET_NEXT_FIVE_GIGS':
			const nextFive = [...action.payload];
			return {
				next_five_gigs: nextFive
					.sort((a, b) => {
						return new Date(b.gig_date) - new Date(a.gig_date);
					})
					.filter((gig) => {
						return (
							new Date(gig.gig_date) > new Date() ||
							new Date(gig.gig_date) === new Date()
						);
					})
					.sort((a, b) => {
						return new Date(a.gig_date) - new Date(b.gig_date);
					})
					.splice(0, 4),
			};
		// case 'SET_NEXT_FIVE_GIGS':
		// 	const nextFive = [...action.payload];
		// 	return {
		// 		next_five_gigs: nextFive
		// 			.sort((a, b) => {
		// 				return new Date(b.gig_date) - new Date(a.gig_date);
		// 			})
		// 			.filter((gig) => {
		// 				return (
		// 					new Date(gig.gig_date) > new Date() ||
		// 					new Date(gig.gig_date) === new Date()
		// 				);
		// 			})
		// 			.sort((a, b) => {
		// 				return new Date(a.gig_date) - new Date(b.gig_date);
		// 			})
		// 			.splice(0, 4),
		// 	};
		case 'SET_UPCOMING_GIGS':
			// const upcomingGigs = [...action.payload];/
			return {
				upcoming_gigs: action.payload,
				// .sort((a, b) => {
				// 	return new Date(b.gig_date) - new Date(a.gig_date);
				// })
				// .filter((gig) => {
				// 	return (
				// 		new Date(gig.gig_date) > new Date() ||
				// 		new Date(gig.gig_date) === new Date()
				// 	);
				// })
				// .sort((a, b) => {
				// 	return new Date(a.gig_date) - new Date(b.gig_date);
				// }),
			};
		// case 'SET_UPCOMING_GIGS':
		// 	const upcomingGigs = [...action.payload];
		// 	return {
		// 		upcoming_gigs: upcomingGigs
		// 			.sort((a, b) => {
		// 				return new Date(b.gig_date) - new Date(a.gig_date);
		// 			})
		// 			.filter((gig) => {
		// 				return (
		// 					new Date(gig.gig_date) > new Date() ||
		// 					new Date(gig.gig_date) === new Date()
		// 				);
		// 			})
		// 			.sort((a, b) => {
		// 				return new Date(a.gig_date) - new Date(b.gig_date);
		// 			}),
		// 	};
		case 'SET_PREVIOUS_GIGS':
			const perviousGigs = [...action.payload];
			return {
				previous_gigs: perviousGigs
					.sort((a, b) => {
						return new Date(a.gig_date) - new Date(b.gig_date);
					})
					.filter((gig) => {
						return (
							new Date(gig.gig_date) < new Date() ||
							new Date(gig.gig_date) === new Date()
						);
					})
					.sort((a, b) => {
						return new Date(b.gig_date) - new Date(a.gig_date);
					}),
			};
		case 'CREATE_GIG':
			return {
				// ...state.workouts is previous state, action.payload is new workout to add
				gigs: [action.payload, ...state.gigs],
			};
		case 'DELETE_GIG':
			return {
				gigs: state.gigs.filter((gig) => gig._id !== action.payload._id),
			};
		default:
			return state;
	}
};
// children represents everything the GigsContextProvider wraps
export const GigsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(gigsReducer, {
		gigs: null,
		next_gig: null,
		next_five_gigs: null,
		upcoming_gigs: null,
		previous_gigs: null,
		gigData: null,
		band_gig_data: null,
		gigCounterData: null,
		bandsGigCount: null,
		citiesGigCount: null,
		globalStatData: null,
	});

	return (
		<GigsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GigsContext.Provider>
	);
};
