import { GigsContext } from '../context/GigContext';
import { useContext } from 'react';

export const useGigsContext = () => {
	const context = useContext(GigsContext);

	if (!context) {
		throw Error('useGigsContext must be used inside a gigs Context Provider');
	}

	return context;
};
