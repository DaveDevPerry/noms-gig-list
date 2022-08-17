import { BandsContext } from '../context/BandContext';
import { useContext } from 'react';

export const useBandsContext = () => {
	const context = useContext(BandsContext);

	if (!context) {
		throw Error('useBandsContext must be used inside a bands Context Provider');
	}

	return context;
};
