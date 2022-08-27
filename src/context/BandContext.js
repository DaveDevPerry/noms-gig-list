import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const BandsContext = createContext();

export const bandsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_BANDS':
			return {
				bands:
					action.payload === null
						? action.payload
						: action.payload.sort((a, b) => (a.name > b.name ? 1 : -1)),
			};

		case 'SET_BAND':
			const clonedBand = [...action.payload];
			log(clonedBand, 'clonedBand');
			const bandGigDataObj = clonedBand
				.map(({ city }) => city)
				.reduce(function (count, currentValue) {
					return (
						count[currentValue]
							? ++count[currentValue]
							: (count[currentValue] = 1),
						count
					);
				}, {});
			log(bandGigDataObj, 'bandGigDataObj');
			// convert to arr of obj
			const citiesGigCountArrOfObj = Object.entries(bandGigDataObj).map(
				([key, value]) => ({
					key,
					value,
				})
			);
			log(citiesGigCountArrOfObj, 'citiesGigCountArrOfObj');
			return {
				currentBand: clonedBand,
				currentCityCount: citiesGigCountArrOfObj.sort((a, b) => {
					return b.value - a.value;
				}),
			};
		// return {
		// 	bands: action.payload.sort((a, b) => (a.name > b.name ? 1 : -1)),
		// };
		// case 'SET_NEXT_GIG':
		// 	const next = [...action.payload];
		// 	return {
		// 		next_gig: next
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
		// 			})[0],
		// 	};
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
		// case 'SET_PREVIOUS_GIGS':
		// 	const perviousGigs = [...action.payload];
		// 	return {
		// 		previous_gigs: perviousGigs
		// 			.sort((a, b) => {
		// 				return new Date(a.gig_date) - new Date(b.gig_date);
		// 			})
		// 			.filter((gig) => {
		// 				return (
		// 					new Date(gig.gig_date) < new Date() ||
		// 					new Date(gig.gig_date) === new Date()
		// 				);
		// 			})
		// 			.sort((a, b) => {
		// 				return new Date(a.gig_date) - new Date(b.gig_date);
		// 			}),
		// 	};
		case 'CREATE_BAND':
			return {
				// ...state.workouts is previous state, action.payload is new workout to add
				bands: [action.payload, ...state.bands],
			};
		case 'DELETE_BAND':
			return {
				bands: state.bands.filter((band) => band._id !== action.payload._id),
			};
		default:
			return state;
	}
};
// children represents everything the BandsContextProvider wraps
export const BandsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(bandsReducer, {
		bands: null,
		currentBand: null,
		currentCityCount: null,
	});

	return (
		<BandsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</BandsContext.Provider>
	);
};
