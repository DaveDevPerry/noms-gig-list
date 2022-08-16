import { createContext, useReducer } from 'react';

export const GigsContext = createContext();

export const gigsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_GIGS':
			return {
				gigs: action.payload,
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
	});

	return (
		<GigsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GigsContext.Provider>
	);
};
