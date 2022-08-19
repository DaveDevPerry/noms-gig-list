import { VenuesContext } from '../context/VenueContext';
import { useContext } from 'react';

export const useVenuesContext = () => {
	const context = useContext(VenuesContext);

	if (!context) {
		throw Error(
			'useVenuesContext must be used inside a venues Context Provider'
		);
	}

	return context;
};
