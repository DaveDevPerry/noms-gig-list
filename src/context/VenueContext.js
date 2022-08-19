import { createContext, useReducer } from 'react';

export const VenuesContext = createContext();

export const venuesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_VENUES':
			return {
				venues: action.payload,
			};
		case 'CREATE_VENUE':
			return {
				// ...state.workouts is previous state, action.payload is new workout to add
				venues: [action.payload, ...state.venues],
			};
		case 'DELETE_VENUE':
			return {
				venues: state.venues.filter(
					(venue) => venue._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};
// children represents everything the VenuesContextProvider wraps
export const VenuesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(venuesReducer, {
		venues: null,
	});

	return (
		<VenuesContext.Provider value={{ ...state, dispatch }}>
			{children}
		</VenuesContext.Provider>
	);
};
