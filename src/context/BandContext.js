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
				bandCount:
					action.payload === null ? action.payload : action.payload.length,
			};

		// sets all details for a band
		case 'SET_BAND':
			// currentCityCount
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
		bandCount: null,
	});

	return (
		<BandsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</BandsContext.Provider>
	);
};
