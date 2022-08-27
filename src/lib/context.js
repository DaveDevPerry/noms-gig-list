import React, { createContext, useContext, useState } from 'react';
// import React, { createContext, useContext, useEffect, useState } from 'react';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	const [totalGigsPerBand, setTotalGigsPerBand] = useState(null);
	const [totalSupportGigsPerBand, setTotalSupportGigsPerBand] = useState(null);
	const [combinedGigsPerBand, setCombinedGigsPerBand] = useState(null);
	const [totalGigsPerCity, setTotalGigsPerCity] = useState(null);
	const [totalGigsPerVenue, setTotalGigsPerVenue] = useState(null);

	const [dataLoaded, setDataLoaded] = useState(false);

	const [bandToView, setBandToView] = useState(null);
	const [bandDetailsData, setBandDetailsData] = useState(null);

	const [bandAllGigsData, setBandAllGigsData] = useState(null);

	const [bandFestivalCount, setBandFestivalCount] = useState(null);
	const [bandHeadlineGigsData, setBandHeadlineGigsData] = useState(null);
	const [bandSupportGigsData, setBandSupportGigsData] = useState(null);

	const [cityToView, setCityToView] = useState(null);
	const [cityDetailsData, setCityDetailsData] = useState(null);

	const [gigToView, setGigToView] = useState(null);

	const [venueToView, setVenueToView] = useState(null);
	const [venueDetailsData, setVenueDetailsData] = useState(null);
	const [venueAllGigsData, setVenueAllGigsData] = useState(null);

	return (
		<AppContext.Provider
			value={{
				setTotalGigsPerBand,
				totalGigsPerBand,

				totalSupportGigsPerBand,
				setTotalSupportGigsPerBand,

				combinedGigsPerBand,
				setCombinedGigsPerBand,

				totalGigsPerCity,
				setTotalGigsPerCity,
				// setGlobalGigsPerBandCount,

				dataLoaded,
				setDataLoaded,
				setBandToView,
				bandToView,
				setBandDetailsData,
				bandDetailsData,

				cityToView,
				setCityToView,
				cityDetailsData,
				setCityDetailsData,

				bandSupportGigsData,
				setBandSupportGigsData,

				setBandHeadlineGigsData,
				bandHeadlineGigsData,

				bandAllGigsData,
				setBandAllGigsData,

				gigToView,
				setGigToView,

				totalGigsPerVenue,
				setTotalGigsPerVenue,

				venueToView,
				setVenueToView,

				venueDetailsData,
				setVenueDetailsData,
				venueAllGigsData,
				setVenueAllGigsData,

				bandFestivalCount,
				setBandFestivalCount,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => useContext(AppContext);
