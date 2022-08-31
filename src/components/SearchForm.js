import { useState } from 'react';
// import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';
// import GigFormBands from './GigFormBands';
// import { useCitiesContext } from '../hooks/useCitiesContext';
// import { useVenuesContext } from '../hooks/useVenuesContext';
// import GigFormCities from './GigFormCities';
// import GigFormVenues from './GigFormVenues';
// import { log } from '../helper';
// import GigFormSupportBands from './GigFormSupportBands';
import toast from 'react-hot-toast';
import SearchFormBands from './SearchFormBands';
import SearchFormCities from './SearchFormCities';
import { log } from '../helper';
import { useStateContext } from '../lib/context';

const SearchForm = ({ isFormActive, setIsFormActive }) => {
	const navigate = useNavigate();

	// const { dispatch } = useGigsContext();
	// const { dispatch: bandDispatch } = useBandsContext();
	// const { dispatch: cityDispatch } = useCitiesContext();
	// const { dispatch: venueDispatch } = useVenuesContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	const { gigDateToView, setGigDateToView, setGigToView } = useStateContext();

	// const [createNewBand, setCreateNewBand] = useState(true);
	// const [createNewSupportBand, setCreateNewSupportBand] = useState(true);
	// const [createNewCity, setCreateNewCity] = useState(true);
	// const [createNewVenue, setCreateNewVenue] = useState(true);

	const [display, setDisplay] = useState(false);
	const [searchCityDisplay, setSearchCityDisplay] = useState(false);

	const [bandNameSearchValue, setBandNameSearchValue] = useState('');
	const [cityNameSearchValue, setCityNameSearchValue] = useState('');

	const [gigDateSearchValue, setGigDateSearchValue] = useState('');
	// const [supportDisplay, setSupportDisplay] = useState(false);
	// const [cityDisplay, setCityDisplay] = useState(false);
	// const [venueDisplay, setVenueDisplay] = useState(false);
	// const [headline_band, setHeadline_band] = useState('');
	// const [support_band, setSupport_band] = useState('');
	// const [gig_date, setGig_date] = useState('');
	// const [venue, setVenue] = useState('');
	// const [city, setCity] = useState('');
	// const [gig_details, setGig_details] = useState('');
	// const [isFestival, setIsFestival] = useState(false);

	const [setError] = useState(null);
	// const [error, setError] = useState(null);
	// const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}
		if (gigDateSearchValue === '') {
			log('date is empty');
		}
		if (gigDateSearchValue !== '') {
			log(gigDateSearchValue, gigDateToView, 'gig date states');
			const fetchGig = async () => {
				const response = await fetch(
					`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
					{
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					}
				);
				const json = await response.json();
				const clonedGigs = [...json];

				// log(clonedGigs, 'cloned gigs - search');
				// log(
				// 	new Date(clonedGigs[0].gig_date).toDateString(),
				// 	new Date(gigDateToView).toDateString(),
				// 	'cloned gigs date string - search'
				// );
				// log(
				// 	new Date(clonedGigs[0].gig_date),
				// 	new Date(gigDateToView),
				// 	'cloned gigs date - search'
				// );
				const filterGig = clonedGigs.filter((gig) => {
					return (
						new Date(gig.gig_date).toDateString() ===
						new Date(gigDateToView).toDateString()
					);
				});
				log(filterGig, 'filterGig');

				if (filterGig.length === 0) {
					notify('no record found of a gig on that date!');
					setGigDateSearchValue('');
					return;
				}

				if (response.ok) {
					setGigDateSearchValue('');
					setGigToView(filterGig[0]._id);
					navigate('/gig');
					// setOptions(filterGig);
					// setOptions(json);
				}
			};
			// if we have a value for the user then fetch the workouts
			if (user) {
				fetchGig();
			}
			return;
		}

		if (
			(bandNameSearchValue !== '' &&
				cityNameSearchValue !== '' &&
				gigDateSearchValue !== '') ||
			(bandNameSearchValue !== '' && cityNameSearchValue !== '') ||
			(bandNameSearchValue !== '' && gigDateSearchValue !== '') ||
			(cityNameSearchValue !== '' && gigDateSearchValue !== '')
		) {
			// navigate('/band');
			log('error both have values');
			notify('you can only search by either band, city, or date.');
			return;
		}

		if (
			bandNameSearchValue === '' &&
			cityNameSearchValue === '' &&
			gigDateSearchValue === ''
		) {
			// log('error search fields are empty');
			// setError('search fields are empty');
			notify('you are not searching for anything yet!');
			return;
		}

		if (bandNameSearchValue === '') {
			log('band name empty');
		}
		if (bandNameSearchValue !== '') {
			navigate('/band');
		}

		if (cityNameSearchValue === '') {
			log('city name empty');
		}
		if (cityNameSearchValue !== '') {
			navigate('/city');
		}
		// check if new band and action
		// if (createNewBand === false) {
		// 	log('new gig, existing band');
		// 	// gig = { headline_band, venue, city, gig_date, gig_details };
		// }
		// if (createNewBand === true) {
		// 	log('new gig, create new band');
		// 	// gig = { headline_band, venue, city, gig_date, gig_details };
		// 	const band = { name: headline_band };
		// 	const response = await fetch(
		// 		`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
		// 		{
		// 			// const response = await fetch('/api/weights', {
		// 			method: 'POST',
		// 			body: JSON.stringify(band),
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				Authorization: `Bearer ${user.token}`,
		// 			},
		// 		}
		// 	);
		// 	const json = await response.json();
		// 	log(json, 'json creating band in form post submit');
		// 	if (!response.ok) {
		// 		setError(json.error);
		// 	}
		// 	if (response.ok) {
		// 		setError(null);
		// 		log('new band added', json);
		// 		bandDispatch({ type: 'CREATE_BAND', payload: json });
		// 	}
		// 	log('new band added', json);
		// }
		// log('new band added, now adding gig');
		// const handleClose = () => {
		// 	navigate('/home');
		// 	// setIsFormActive(!isFormActive);
		// };
		// }
		// check if new band (support) and action
		// if (createNewSupportBand === false) {
		// 	log('new gig, existing band');
		// 	// gig = { headline_band, venue, city, gig_date, gig_details };
		// }
		// if (createNewSupportBand === true) {
		// 	log('new gig, create new support band');
		// 	// gig = { headline_band, venue, city, gig_date, gig_details };
		// 	const band = { name: support_band };
		// 	const response = await fetch(
		// 		`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
		// 		{
		// 			// const response = await fetch('/api/weights', {
		// 			method: 'POST',
		// 			body: JSON.stringify(band),
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				Authorization: `Bearer ${user.token}`,
		// 			},
		// 		}
		// 	);
		// 	const json = await response.json();
		// 	log(json, 'json creating band in form post submit');
		// 	if (!response.ok) {
		// 		setError(json.error);
		// 	}
		// 	if (response.ok) {
		// 		setError(null);
		// 		log('new band added', json);
		// 		bandDispatch({ type: 'CREATE_BAND', payload: json });
		// 	}
		// 	log('new  support band added', json);
		// }
		// log('new band added, now adding gig');
		// const handleClose = () => {
		// 	navigate('/home');
		// 	// setIsFormActive(!isFormActive);
		// };
		// }

		// check if new venue and action
		// if (createNewVenue === false) {
		// 	log('new gig, existing venue');
		// 	// gig = { headline_band, venue, venue, gig_date, gig_details };
		// }
		// if (createNewVenue === true) {
		// 	log('new gig, create new venue');
		// 	// gig = { headline_band, venue, city, gig_date, gig_details };
		// 	const currentVenue = { name: venue };
		// 	const response = await fetch(
		// 		`${process.env.REACT_APP_BACKEND_URL}/api/venues`,
		// 		{
		// 			// const response = await fetch('/api/weights', {
		// 			method: 'POST',
		// 			body: JSON.stringify(currentVenue),
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				Authorization: `Bearer ${user.token}`,
		// 			},
		// 		}
		// 	);
		// 	const json = await response.json();
		// 	log(json, 'json creating venue in form post submit');
		// 	if (!response.ok) {
		// 		setError(json.error);
		// 	}
		// 	if (response.ok) {
		// 		setError(null);
		// 		log('new city added', json);
		// 		venueDispatch({ type: 'CREATE_VENUE', payload: json });
		// 	}
		// 	log('new venue added', json);
		// }

		// check if new city and action
		// if (createNewCity === false) {
		// 	log('new gig, existing city');
		// 	// gig = { headline_band, venue, city, gig_date, gig_details };
		// }
		// if (createNewCity === true) {
		// 	log('new gig, create new city');
		// 	// gig = { headline_band, venue, city, gig_date, gig_details };
		// 	const currentCity = { name: city };
		// 	const response = await fetch(
		// 		`${process.env.REACT_APP_BACKEND_URL}/api/cities`,
		// 		{
		// 			// const response = await fetch('/api/weights', {
		// 			method: 'POST',
		// 			body: JSON.stringify(currentCity),
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				Authorization: `Bearer ${user.token}`,
		// 			},
		// 		}
		// 	);
		// 	const json = await response.json();
		// 	log(json, 'json creating city in form post submit');
		// 	if (!response.ok) {
		// 		setError(json.error);
		// 	}
		// 	if (response.ok) {
		// 		setError(null);
		// 		log('new city added', json);
		// 		cityDispatch({ type: 'CREATE_CITY', payload: json });
		// 	}
		// 	log('new city added', json);
		// }
		// log('new city added, now adding gig');

		// const gig = {
		// 	headline_band,
		// 	support_band,
		// 	venue,
		// 	city,
		// 	gig_date,
		// 	gig_details,
		// 	isFestival,
		// };
		// log(gig, 'gig post submit');

		// const response = await fetch(
		// 	`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
		// 	{
		// 		// const response = await fetch('/api/weights', {
		// 		method: 'POST',
		// 		body: JSON.stringify(gig),
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `Bearer ${user.token}`,
		// 		},
		// 	}
		// );
		// const json = await response.json();

		// log(json, 'json in form post submit');

		// if (!response.ok) {
		// 	setError(json.error);
		// 	// setEmptyFields(json.emptyFields);
		// }
		// if (response.ok) {
		// 	// setNewWeight('');
		// 	// setVenue('');
		// 	// setCity('');
		// 	setHeadline_band('');
		// 	// setSupport_band('');
		// 	// setGig_date('');
		// 	// setGig_details('');
		// 	// setIsFestival(false);
		// 	// setGig_details('');
		// 	// setReps('');
		// 	setError(null);
		// 	// setEmptyFields([]);
		// 	// log('new gig added', json);
		// 	dispatch({ type: 'CREATE_GIG', payload: json });
		// }
		// setIsFormActive(!isFormActive);
		// notify();
	};
	const handleClose = () => {
		navigate('/home');
	};

	// create a toast
	const notify = (errorMsg) => {
		toast.error(`${errorMsg}.`, {
			duration: 3000,
			style: {
				border: '2px solid #e7195a',
			},
		});
	};

	return (
		<StyledSearchForm
			className='search'
			onSubmit={handleSubmit}
			// initial={{ height: 0 }}
			// 			animate={{ height: '80%' }}
		>
			<h3>
				Search
				<CgCloseR className='close-icon' onClick={handleClose} />
			</h3>

			<div className='input-wrapper-band'>
				<label>Band:</label>
				<SearchFormBands
					setDisplay={setDisplay}
					display={display}
					bandNameSearchValue={bandNameSearchValue}
					setBandNameSearchValue={setBandNameSearchValue}
					setError={setError}
				/>
			</div>

			<div className='input-wrapper-band'>
				<label>City:</label>
				<SearchFormCities
					setSearchCityDisplay={setSearchCityDisplay}
					searchCityDisplay={searchCityDisplay}
					setCityNameSearchValue={setCityNameSearchValue}
					cityNameSearchValue={cityNameSearchValue}
					setError={setError}
				/>
			</div>

			<div className='input-wrapper-band'>
				<label>Date:</label>
				<input
					type='date'
					id='search-date'
					onChange={(e) => {
						setGigDateToView(e.target.value);
						setGigDateSearchValue(e.target.value);
					}}
					// onChange={(e) => setGigDateSearchValue(e.target.value)}
					value={gigDateSearchValue}
					// className={emptyFields.includes('gig_date') ? 'error' : ''}
					// required
				/>
			</div>

			{/* <div className='input-wrapper-band'>
				<label>Support Band:</label>
				<GigFormSupportBands
					setSupportDisplay={setSupportDisplay}
					supportDisplay={supportDisplay}
					setSupport_band={setSupport_band}
					support_band={support_band}
					emptyFields={emptyFields}
					setCreateNewSupportBand={setCreateNewSupportBand}
				/>
			</div>
		
			<div className='input-wrapper-band'>
				<label>
					Venue:<span className='field-required'>*</span>
				</label>
				<GigFormVenues
					setVenueDisplay={setVenueDisplay}
					venueDisplay={venueDisplay}
					setVenue={setVenue}
					venue={venue}
					emptyFields={emptyFields}
					setCreateNewVenue={setCreateNewVenue}
				/>
			</div> */}

			{/* <div className='small-input-wrappers'>
				<div className='input-wrapper'>
					<label>Festival:</label>
					<input
						type='checkbox'
						id='input-checkbox'
						onChange={() => setIsFestival(!isFestival)}
						value={isFestival}
						// className={emptyFields.includes('gig_date') ? 'error' : ''}
					/>
				</div>
				<div className='input-wrapper-date'>
					<label>
						Date:<span className='field-required'>*</span>
					</label>
					<input
						type='date'
						id='input-date'
						onChange={(e) => setGig_date(e.target.value)}
						value={gig_date}
						className={emptyFields.includes('gig_date') ? 'error' : ''}
						required
					/>
				</div>
			</div> */}
			{/* <div className='input-wrapper'>
				<label>Festival?:</label>
				<input
					type='checkbox'
					id='input-number'
					onChange={() => setIsFestival(!isFestival)}
					value={isFestival}
					// className={emptyFields.includes('gig_date') ? 'error' : ''}
				/>
			</div>
			<div className='input-wrapper'>
				<label>Date:</label>
				<input
					type='date'
					id='input-number'
					onChange={(e) => setGig_date(e.target.value)}
					value={gig_date}
					className={emptyFields.includes('gig_date') ? 'error' : ''}
				/>
			</div> */}
			{/* <div className='input-wrapper-band'>
				<label>details:</label>
				<textarea
					id='input-area'
					cols='30'
					rows='3'
					onChange={(e) => setGig_details(e.target.value)}
					value={gig_details}
				></textarea>
		
			</div> */}
			{/* <div className='input-wrapper-band'>
				<label>details:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setGig_details(e.target.value)}
					value={gig_details}
					// className={emptyFields.includes('gig_details') ? 'error' : ''}
					// autoFocus
				/>
			</div> */}

			<div className='btn-container'>
				{/* {error && <div className='error'>{error}</div>} */}
				<button className='add-btn'>search</button>
			</div>
		</StyledSearchForm>
	);
};
const StyledSearchForm = styled.form`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 2rem;
	/* padding: 1rem 2rem 2rem 2rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	/* row-gap: 1rem; */
	/* flex: 1; */
	p.form-title {
		padding: 0 2rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 1.6rem;
		text-align: center;
		margin-top: 1rem;
	}
	h3 {
		text-align: center;
		margin: 0;
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
		/* color: ${({ theme }) => theme.txtDarkGrey}; */
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.txtDarkGrey};
			cursor: pointer;
		}
	}
	.small-input-wrappers {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 0.5rem;
		margin-top: 0.5rem;
		.input-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			label {
				font-size: 1.6rem;
				text-align: right;
				color: ${({ theme }) => theme.txtDarkGrey};
				font-weight: bold;
			}
			/* #input-checkbox {
				margin: 0;
				font-size: 1.8rem;
				color: ${({ theme }) => theme.black};
				width: 3rem;
				height: 3rem;
				border: 2px solid ${({ theme }) => theme.borderGrey};
				border-radius: 4px;
			} */
			input[type='checkbox'] {
				/* ...existing styles */
				display: grid;
				place-content: center;
				/* margin: 0; */
				/* font-size: 1.8rem; */
				color: ${({ theme }) => theme.black};
				width: 3rem;
				height: 3rem;
				/* width: 4.2rem;
				height: 4.2rem; */
				/* border: 2px solid ${({ theme }) => theme.borderGrey}; */
				border-radius: 4px;

				appearance: none;
				background-color: transparent;
				margin: 0;
				font: inherit;
				/* color: currentColor; */
				/* width: 1.15em; */
				/* height: 1.15em; */
				/* border: 0.15em solid currentColor; */
				/* border-radius: 0.15em; */
				transform: translateY(-0.075em);
			}

			input[type='checkbox']::before {
				content: '';
				width: 1em;
				height: 1em;
				transform: scale(0);
				transition: 120ms transform ease-in-out;
				box-shadow: inset 1em 1em ${({ theme }) => theme.primaryColor};
			}

			input[type='checkbox']:checked::before {
				transform: scale(1);
			}
		}
		.input-wrapper-date {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			label {
				font-size: 1.6rem;
				text-align: right;
				color: ${({ theme }) => theme.txtDarkGrey};
				font-weight: bold;
			}
			#input-date {
				padding: 0.8rem 0.5rem;
				margin: 0;
				font-size: 1.8rem;
				color: ${({ theme }) => theme.black};
				/* flex: 1; */
			}
		}
	}
	/* .input-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 1rem;
		margin-top: 1.5rem;
		label {
			font-size: 1.6rem;
			text-align: right;
			flex: 1;
			color: ${({ theme }) => theme.txtDarkGrey};
			font-weight: bold;
		}
		#input-number {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.black};
			flex: 1;
		}
	} */

	.input-wrapper-band {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* align-items: center; */
		/* row-gap: 0.5rem; */
		label {
			font-size: 1.6rem;
			text-align: left;
			flex: 1;
			text-transform: capitalize;
			color: ${({ theme }) => theme.txtDarkGrey};
			font-weight: bold;
		}
		#auto {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.black};
			flex: 1;
		}
		#input-number {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.black};
			flex: 1;
		}
		#search-date {
			padding: 0.8rem 0.5rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.black};
			/* flex: 1; */
		}
		textarea {
			border: 2px solid ${({ theme }) => theme.borderGrey};
			border-radius: 4px;
			padding: 10px;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.black};
			font-family: 'Arial';
			&:focus {
				outline: none;
				border: none;
				border: 2px solid ${({ theme }) => theme.primaryColor};
				border-radius: 4px;
				box-sizing: border-box;
			}
		}
	}
	.btn-container {
		/* display: flex;
		flex-direction: column;
		row-gap: 1rem; */
		/* flex: 1; */
		/* justify-content: flex-end; */
		margin-top: 1.6rem;
		.add-btn {
			color: ${({ theme }) => theme.white};
			font-weight: bolder;
			text-transform: uppercase;
			font-size: 1.6rem;
			width: 100%;
		}
	}
`;

export default SearchForm;
