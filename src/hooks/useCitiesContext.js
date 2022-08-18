import { CitiesContext } from '../context/CityContext';
import { useContext } from 'react';

export const useCitiesContext = () => {
	const context = useContext(CitiesContext);

	if (!context) {
		throw Error(
			'useCitiesContext must be used inside a cities Context Provider'
		);
	}

	return context;
};
