import { createContext, useReducer } from 'react';

export const GigsContext = createContext();

export const gigsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_GIGS':
			return {
				gigs: action.payload,
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
	});

	return (
		<GigsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GigsContext.Provider>
	);
};
