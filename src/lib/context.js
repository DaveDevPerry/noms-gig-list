import React, { createContext, useContext, useState } from 'react';
import { log } from '../helper';
// import React, { createContext, useContext, useEffect, useState } from 'react';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	const [totalGigsPerBand, setTotalGigsPerBand] = useState(null);
	const [totalSupportGigsPerBand, setTotalSupportGigsPerBand] = useState(null);
	const [combinedGigsPerBand, setCombinedGigsPerBand] = useState(null);
	const [totalGigsPerCity, setTotalGigsPerCity] = useState(null);
	const [totalGigsPerVenue, setTotalGigsPerVenue] = useState(null);
	const [totalGigsEachYear, setTotalGigsEachYear] = useState(null);
	const [totalFestivalCount, setTotalFestivalCount] = useState(null);
	const [totalBandCount, setTotalBandCount] = useState(null);
	const [totalGigCount, setTotalGigCount] = useState(null);

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

	const [bandWinnersStats, setBandWinnersStats] = useState(null);

	// this function returns a bands top stats - top venue, top city with counts
	const getBandsTopStats = (gigs, chosenBand) => {
		log(gigs, 'gigs by band');

		// get headline count
		const clonedGigs = [...gigs];
		const gigHeadlineCountObj = clonedGigs
			.map(({ headline_band }) => headline_band)
			.reduce(function (count, currentValue) {
				return (
					count[currentValue]
						? ++count[currentValue]
						: (count[currentValue] = 1),
					count
				);
			}, {});
		log(gigHeadlineCountObj, 'gigHeadlineCountObj');
		// convert object to array of key value pair objects
		const gigCountArrOfObj = Object.entries(gigHeadlineCountObj)
			.map(([key, value]) => ({
				bandName: key,
				headlineCount: value,
			}))
			.filter((obj) => obj.bandName === chosenBand);
		log(gigCountArrOfObj, 'gigCountArrOfObj');

		// get support count
		const clonedSGigs = [...gigs];
		const gigSupportCountObj = clonedSGigs
			.map(({ support_band }) => support_band)
			.reduce(function (count, currentValue) {
				return (
					count[currentValue]
						? ++count[currentValue]
						: (count[currentValue] = 1),
					count
				);
			}, {});
		log(gigSupportCountObj, 'gigSupportCountObj');
		// convert object to array of key value pair objects
		const gigSupportCountArrOfObj = Object.entries(gigSupportCountObj)
			.map(([key, value]) => ({
				bandName: key,
				supportCount: value,
			}))
			.filter((obj) => obj.bandName === chosenBand);
		log(gigSupportCountArrOfObj, 'gigSupportCountArrOfObj');

		// merge headline and support counts to one obj
		const map = new Map();
		gigCountArrOfObj.forEach((item) => map.set(item.bandName, item));
		gigSupportCountArrOfObj.forEach((item) =>
			map.set(item.bandName, { ...map.get(item.bandName), ...item })
		);
		const mergedBandGigCounts = Array.from(map.values());

		log(JSON.stringify(mergedBandGigCounts));

		// add support or headline keys if needed
		const newStats = [];
		// const updatedMergedBandGigCounts = mergedBandGigCounts.forEach((band, index) => {
		mergedBandGigCounts.forEach((band, index) => {
			// console.log(band, 'band object in gig context');
			if (!band.supportCount) {
				band.supportCount = 0;
			}
			if (!band.headlineCount) {
				band.headlineCount = 0;
			}
			band.totalGigCount = band.headlineCount + band.supportCount;
			newStats.push(band);
		});

		log(newStats, 'new stats');

		// get all gigs per unique venue
		const clonedGigUniqueVenue = [...gigs];
		// const uniqueVenueCountObj = clonedGigUniqueVenue.map((gig) => {
		// 	return {
		// 		gigId: gig._id,
		// 		venue: gig.venue,
		// 		city: gig.city,
		// 		combined: `${gig.venue}${gig.city}`,
		// 	};
		// });

		// log(uniqueVenueCountObj, 'uniqueVenueCountObj');
		const uniqueVenueCountObj = clonedGigUniqueVenue
			.map((gig) => {
				return {
					gigId: gig._id,
					venue: gig.venue,
					city: gig.city,
					combined: `${gig.venue}|${gig.city}`,
				};
			})
			.reduce(function (count, currentValue) {
				return (
					count[currentValue.combined]
						? ++count[currentValue.combined]
						: (count[currentValue.combined] = 1),
					count
				);
			}, {});
		log(uniqueVenueCountObj, 'uniqueVenueCountObj');

		// convert object to array of key value pair objects
		const uniqueVenueGigCountArrOfObj = Object.entries(uniqueVenueCountObj).map(
			([key, value]) => ({
				combinedVenueCity: key,
				venueCount: value,
				venueName: key.substring(0, key.indexOf('|')),
				cityName: key.substring(key.indexOf('|') + 1),
			})
		);

		log(uniqueVenueGigCountArrOfObj, 'uniqueVenueGigCountArrOfObj');

		// sort by venue count and return highest
		const sortedVenuesByCount = uniqueVenueGigCountArrOfObj.sort(
			(a, b) => b.venueCount - a.venueCount
		);
		log(sortedVenuesByCount, 'sortedVenuesByCount');

		// sort by city count
		// const clonedCityData = [...uniqueVenueGigCountArrOfObj]
		// get top city
		// const cityCountObj = clonedCityData.map(({}))

		const bandStatObj = {
			bandName: chosenBand,
			topVenue: sortedVenuesByCount[0],
		};
		setBandWinnersStats(bandStatObj);

		// cities
		const clonedGigsForCityCount = [...gigs];
		const citiesGigCountObj = clonedGigsForCityCount
			// bandsGigCount: action.payload
			.map(({ city }) => city)
			.reduce(function (count, currentValue) {
				return (
					count[currentValue]
						? ++count[currentValue]
						: (count[currentValue] = 1),
					count
				);
			}, {});
		// convert object to array of key value pair objects
		const citiesGigCountArrOfObj = Object.entries(citiesGigCountObj).map(
			([key, value]) => ({
				key,
				value,
			})
		);
		const sortCitiesByGigCount = citiesGigCountArrOfObj.sort((a, b) => {
			return b.value - a.value;
		});
		log(sortCitiesByGigCount, 'sortCitiesByGigCount');

		return;
	};
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

				getBandsTopStats,
				bandWinnersStats,

				totalGigsEachYear,
				setTotalGigsEachYear,

				totalFestivalCount,
				setTotalFestivalCount,
				totalBandCount,
				setTotalBandCount,
				totalGigCount,
				setTotalGigCount,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => useContext(AppContext);
