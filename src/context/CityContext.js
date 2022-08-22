import { createContext, useReducer } from 'react';

export const CitiesContext = createContext();

export const citiesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_CITIES':
			return {
				cities:
					action.payload === null
						? action.payload
						: action.payload.sort((a, b) => (a.name > b.name ? 1 : -1)),
			};
		// return {
		// 	cities: action.payload.sort((a, b) => (a.name > b.name ? 1 : -1)),
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
		case 'CREATE_CITY':
			return {
				// ...state.workouts is previous state, action.payload is new workout to add
				cities: [action.payload, ...state.cities],
			};
		case 'DELETE_CITY':
			return {
				cities: state.cities.filter((band) => band._id !== action.payload._id),
			};
		default:
			return state;
	}
};
// children represents everything the CitiesContextProvider wraps
export const CitiesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(citiesReducer, {
		cities: null,
	});

	return (
		<CitiesContext.Provider value={{ ...state, dispatch }}>
			{children}
		</CitiesContext.Provider>
	);
};
