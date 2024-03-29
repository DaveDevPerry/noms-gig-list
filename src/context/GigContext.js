import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const GigsContext = createContext();

export const gigsReducer = (state, action) => {
	switch (action.type) {
		// case 'SET_GIGS':
		// 	return {
		// 		gigs: action.payload,
		// 	};
		case 'SET_GIGS':
			return {
				gigCounterData: { ...state.gigCounterData, gigs: action.payload },
			};

		case 'SET_GIG':
			log(action.payload, 'action payload gig');
			log(state, 'state before returning gig');
			log({ ...state }, 'state before returning gig');
			log(state.gigCounterData, 'state before returning gig');
			log({ ...state.gigCounterData }, 'state before returning gig');
			log(
				{ ...state.gigCounterData, gig: action.payload },
				'state before returning gig'
			);
			return {
				gigCounterData: { ...state.gigCounterData, gig: action.payload },
			};

		case 'CREATE_GIG':
			return {
				// ...state.workouts is previous state, action.payload is new workout to add
				gigCounterData: {
					...state.gigCounterData,
					gigs: [action.payload, ...state.gigCounterData.gigs],
				},
				// gigCounterData: {
				// 	...state.gigCounterData,
				// 	gigs: [action.payload, ...state.gigs],
				// },
				// gigs: [action.payload, ...state.gigs],
			};
		// case 'CREATE_GIG':
		// 	return {
		// 		// ...state.workouts is previous state, action.payload is new workout to add
		// 		gigs: [action.payload, ...state.gigs],
		// 	};
		// return {
		// 	gig: action.payload,
		// };
		// return {
		// 	gig:
		// }
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

		// case 'SET_BAND_GIGS_DATA':
		// 	const clonedData = [...action.payload];
		// 	log(clonedData, 'cloned data in gig context');
		// return {
		// }

		// 		const groupedByYear = data.map((e) => ({ ...e, published_at: new Date(e.published_at) }))
		// .reduce((acc, e) => {
		//   const year = e.published_at.getFullYear();
		//   const month = e.published_at.getMonth() + 1;
		//   if (!acc[year]) acc[year] = { year };
		//   if (!acc[year][month]) acc[year][month] = [];
		//   acc[year][month] = e;
		//   return acc;
		// }, {})

		// const result = Object.values(groupedByYear).reduce((acc, e) => {
		//   const { year, ...months } = e;
		//   acc.push({ year: year, months: months });
		//   return acc;
		// }, [])

		case 'SET_GLOBAL_STATS':
			// return arr of obj decade
			// const clonedForDecades = [...action.payload];
			// const sortByDecade = clonedForDecades.sort((a, b) => {
			// 	return (
			// 		new Date(b.gig_date).getFullYear() -
			// 		new Date(a.gig_date).getFullYear()
			// 	);
			// });
			// log(sortByDecade, 'sort by decade');

			// const clonedForYears = [...action.payload];
			// const groupedByYears = clonedForYears
			// 	.map((e) => ({ ...e, gig_date: new Date(e.gig_date) }))
			// 	.reduce((acc, e) => {
			// 		const year = e.gig_date.getFullYear();
			// 		const month = e.gig_date.getMonth() + 1;
			// 		if (!acc[year]) acc[year] = { year };
			// 		if (!acc[year][month]) acc[year][month] = [];
			// 		acc[year][month] = e;
			// 		return acc;
			// 	}, {});
			// log(groupedByYears, 'groupedByYears');
			// const resultYears = Object.values(groupedByYears).reduce((acc, e) => {
			// 	const { year, ...months } = e;
			// 	acc.push({ year: year, months: months });
			// 	return acc;
			// }, []);

			// log(resultYears, 'result years');

			// reduce gigs by year
			const clonedToGroupByYear = [...action.payload];
			const groupedByYear = clonedToGroupByYear
				.map(({ gig_date }) => {
					return new Date(gig_date);
				})
				.reduce(function (count, currentValue) {
					const year = currentValue.getFullYear();
					return count[year] ? ++count[year] : (count[year] = 1), count;
				}, {});

			log(groupedByYear, 'grouped by year');
			// convert object to array of key value pair objects
			const gigCountByYearArrOfObj = Object.entries(groupedByYear).map(
				([key, value]) => ({
					year: key,
					count: value,
				})
			);
			log(gigCountByYearArrOfObj, 'gigCountByYearArrOfObj');

			// working headline count only
			const clonedGigs = [...action.payload];
			const gigCountObj = clonedGigs
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
					bandName: key,
					headlineCount: value,
				})
			);
			const sortBandsByGigCount = gigCountArrOfObj.sort((a, b) => {
				return b.bandName > a.bandName;
			});

			// support count only
			const clonedSupportGigs = [...action.payload];
			const gigSupportCountObj = clonedSupportGigs
				.map(({ support_band }) => support_band)
				.reduce(function (count, currentValue) {
					return (
						count[currentValue]
							? ++count[currentValue]
							: (count[currentValue] = 1),
						count
					);
				}, {});
			log(gigSupportCountObj, 'gigSupportCountObj');
			// convert object to array of key value pair objects
			const gigSupportCountArrOfObj = Object.entries(gigSupportCountObj)
				.map(([key, value]) => ({
					bandName: key,
					supportCount: value,
				}))
				.filter((item) => {
					return item.bandName !== '';
				});
			const sortSupportBandsByGigCount = gigSupportCountArrOfObj.sort(
				(a, b) => {
					return b.bandName > a.bandName;
				}
			);

			const map = new Map();
			sortBandsByGigCount.forEach((item) => map.set(item.bandName, item));
			sortSupportBandsByGigCount.forEach((item) =>
				map.set(item.bandName, { ...map.get(item.bandName), ...item })
			);
			const mergedBandGigCounts = Array.from(map.values());

			log(JSON.stringify(mergedBandGigCounts));

			const newStats = [];
			// const updatedMergedBandGigCounts = mergedBandGigCounts.forEach((band, index) => {
			mergedBandGigCounts.forEach((band, index) => {
				// console.log(band, 'band object in gig context');
				if (!band.supportCount) {
					band.supportCount = 0;
				}
				if (!band.headlineCount) {
					band.headlineCount = 0;
				}
				band.totalGigCount = band.headlineCount + band.supportCount;
				newStats.push(band);
			});

			log(newStats, 'new stats');

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
			// cities
			const clonedCityGigsCount = [...action.payload];
			const citiesGigCount = clonedCityGigsCount
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
			const citiesGigCountObjArr = Object.entries(citiesGigCount).map(
				([key, value]) => ({
					key,
					value,
				})
			);
			// const sortCitiesByGigCount = citiesGigCountArrOfObj.sort((a, b) => {
			// 	return b.value - a.value;
			// });
			// venues
			// const clonedUniqueVenueCount = [...action.payload];

			// const res = Object.values(
			// 	clonedUniqueVenueCount.reduce(function (acc, item) {
			// 		return (
			// 			acc[`${item.venue}-${item.city}`]
			// 				? ++acc[`${item.venue}-${item.city}`]
			// 				: (acc[`${item.venue}-${item.city}`] = 1),
			// 			acc
			// 		);
			// 	}, {})
			// );
			// log(res, 'res gig context');

			const clonedUniqueVenueCount = [...action.payload];
			log(clonedUniqueVenueCount, 'cloned unique venue');
			const merged = clonedUniqueVenueCount.map((gig, index) => {
				return `${gig.venue},${gig.city}`;
			});
			log(merged, 'merged');
			const uniqueVenues = [...new Set(merged)];

			log(uniqueVenues, 'uniqueVenues');
			const sortedUniqueVenues = uniqueVenues.sort();
			log(sortedUniqueVenues, 'sortedUniqueVenues');

			// get all gigs per unique venue
			const clonedGigUniqueVenue = [...action.payload];
			// const uniqueVenueCountObj = clonedGigUniqueVenue.map((gig) => {
			// 	return {
			// 		gigId: gig._id,
			// 		venue: gig.venue,
			// 		city: gig.city,
			// 		combined: `${gig.venue}${gig.city}`,
			// 	};
			// });

			// log(uniqueVenueCountObj, 'uniqueVenueCountObj');
			const uniqueVenueCountObj = clonedGigUniqueVenue
				.map((gig) => {
					return {
						gigId: gig._id,
						venue: gig.venue,
						city: gig.city,
						combined: `${gig.venue}|${gig.city}`,
					};
				})
				.reduce(function (count, currentValue) {
					return (
						count[currentValue.combined]
							? ++count[currentValue.combined]
							: (count[currentValue.combined] = 1),
						count
					);
				}, {});
			log(uniqueVenueCountObj, 'uniqueVenueCountObj');

			// convert object to array of key value pair objects
			const uniqueVenueGigCountArrOfObj = Object.entries(
				uniqueVenueCountObj
			).map(([key, value]) => ({
				combinedVenueCity: key,
				venueCount: value,
				venueName: key.substring(0, key.indexOf('|')),
				cityName: key.substring(key.indexOf('|') + 1),
			}));

			const clonedForFestivalCount = [...action.payload];
			const getFestivalCount = clonedForFestivalCount.filter(
				(gig) => gig.isFestival === true
			).length;

			return {
				globalStatData: {
					bandsGigCount: newStats.sort((a, b) => {
						return b.totalGigCount - a.totalGigCount;
					}),
					// bandsGigCount: sortBandsByGigCount,
					citiesGigCount: citiesGigCountArrOfObj.sort(
						(a, b) => b.value - a.value
					),
					citiesGigCountWinner: citiesGigCountObjArr
						.sort((a, b) => (a.key > b.key ? 1 : -1))
						.sort((a, b) => b.value - a.value),
					// citiesGigCountWinner: citiesGigCountObjArr.sort(
					// 	(a, b) => b.value - a.value
					// ),
					// citiesGigCount: citiesGigCountArrOfObj.sort((a, b) =>
					// 	a.key > b.key ? 1 : -1
					// ),
					// citiesGigCount: citiesGigCountArrOfObj,
					// citiesGigCount: sortCitiesByGigCount,
					supportBandsGigCount: sortSupportBandsByGigCount.sort(
						(a, b) => b.supportCount - a.supportCount
					),
					// supportBandsGigCount: sortSupportBandsByGigCount,
					combinedBandGigsCount: mergedBandGigCounts.sort((a, b) =>
						a.bandName > b.bandName ? 1 : -1
					),
					uniqueVenues: sortedUniqueVenues,
					uniqueVenueCount: uniqueVenueGigCountArrOfObj.sort((a, b) =>
						a.combinedVenueCity > b.combinedVenueCity ? 1 : -1
					),
					gigCountPerYear: gigCountByYearArrOfObj,
					festivalCount: getFestivalCount,
				},
			};

		case 'SET_GIG_COUNTER_DATA':
			const clonedUpcoming = [...action.payload];
			const clonedPreviousGigs = [...action.payload];

			const clonedUpGigs = [...action.payload];

			const upcomingGigsSort = clonedUpGigs.sort((a, b) => {
				return new Date(a.gig_date) - new Date(b.gig_date);
			});
			log(upcomingGigsSort, 'upcoming');
			const filtered = upcomingGigsSort.filter((gig) => {
				return (
					new Date(gig.gig_date) > new Date() ||
					new Date(gig.gig_date) === new Date()
				);
			});

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
					next_five_gigs: clonedUpcoming
						.sort((a, b) => {
							return new Date(b.gig_date) - new Date(a.gig_date);
						})
						.filter((gig) => {
							return (
								new Date(gig.gig_date).setHours(0, 0, 0, 0) >=
								new Date().setHours(0, 0, 0, 0) - 1
							);
						})
						.sort((a, b) => {
							// return (
							// 	new Date(b.gig_date).toDateString() -
							// 	new Date(a.gig_date).toDateString()
							// );
							// return (
							// 	new Date(a.gig_date).toDateString() -
							// 	new Date(b.gig_date).toDateString()
							// );
							return new Date(a.gig_date) - new Date(b.gig_date);
						})
						.splice(0, 8),
					previous_gigs: clonedPreviousGigs
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
					upcoming_gigs: filtered,
					// next_five_gigs: action.payload
					// 	.sort((a, b) => {
					// 		return (
					// 			new Date(b.gig_date) - new Date(a.gig_date)
					// 		);
					// 	})
					// 	.filter((gig) => {
					// 		return (
					// 			new Date(gig.gig_date).setHours(0, 0, 0, 0) >=
					// 			new Date().setHours(0, 0, 0, 0) - 1
					// 		);
					// 	})
					// 	.sort((a, b) => {
					// 		return new Date(a.gig_date) - new Date(b.gig_date);
					// 	})
					// 	.splice(0, 8),
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
		// case 'CREATE_GIG':
		// 	return {
		// 		// ...state.workouts is previous state, action.payload is new workout to add
		// 		gigs: [action.payload, ...state.gigs],
		// 	};
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
		gig: null,
	});

	return (
		<GigsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GigsContext.Provider>
	);
};
