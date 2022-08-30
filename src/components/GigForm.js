import { useState } from 'react';
// import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { CgCloseR } from 'react-icons/cg';
import { useBandsContext } from '../hooks/useBandsContext';
import GigFormBands from './GigFormBands';
import { useCitiesContext } from '../hooks/useCitiesContext';
import { useVenuesContext } from '../hooks/useVenuesContext';
import GigFormCities from './GigFormCities';
import GigFormVenues from './GigFormVenues';
import { log } from '../helper';
import GigFormSupportBands from './GigFormSupportBands';
import toast from 'react-hot-toast';
// import { motion } from 'framer-motion';

// const Auto = ({
// 	setDisplay,
// 	display,
// 	setHeadline_band,
// 	emptyFields,
// 	setCreateNewBand,
// }) => {
// 	const { user } = useAuthContext();
// 	// const [display, setDisplay] = useState(false);
// 	const [options, setOptions] = useState([]);
// 	const [search, setSearch] = useState('');
// 	const wrapperRef = useRef(null);

// 	useEffect(() => {
// 		const fetchAllBands = async () => {
// 			const response = await fetch(
// 				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
// 				{
// 					headers: {
// 						Authorization: `Bearer ${user.token}`,
// 					},
// 				}
// 			);
// 			const json = await response.json();
// 			if (response.ok) {
// 				setOptions(json);
// 			}
// 		};
// 		// if we have a value for the user then fetch the workouts
// 		if (user) {
// 			fetchAllBands();
// 		}
// 	}, []);

// 	// sets event listeners
// 	useEffect(() => {
// 		document.addEventListener('mousedown', handleClickOutside);
// 		return () => {
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, []);

// 	const handleClickOutside = (event) => {
// 		const { current: wrap } = wrapperRef;
// 		if (wrap && !wrap.contains(event.target)) {
// 			setDisplay(false);
// 		}
// 	};

// 	const setBandDex = (poke) => {
// 		log(poke, 'poke setBandDex');
// 		setSearch(poke);
// 		setHeadline_band(poke);
// 		setCreateNewBand(false);
// 		setDisplay(false);
// 	};

// 	return (
// 		<div className='search-container' ref={wrapperRef}>
// 			<input
// 				id='auto'
// 				onClick={() => setDisplay(!display)}
// 				className={emptyFields.includes('headline_band') ? 'error' : ''}
// 				autoFocus
// 				value={search}
// 				onChange={(event) => {
// 					setSearch(event.target.value);
// 					setHeadline_band(event.target.value);
// 				}}
// 				autoComplete='off'
// 			/>
// 			{display && (
// 				<div className='autoContainer'>
// 					{options
// 						.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
// 						.map((v, i) => {
// 							return (
// 								<div
// 									key={i}
// 									className='option'
// 									onClick={() => setBandDex(v.name)}
// 								>
// 									<span>{v.name}</span>
// 								</div>
// 							);
// 						})}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

const GigsForm = ({ isFormActive, setIsFormActive }) => {
	const navigate = useNavigate();

	const { dispatch } = useGigsContext();
	const { dispatch: bandDispatch } = useBandsContext();
	const { dispatch: cityDispatch } = useCitiesContext();
	const { dispatch: venueDispatch } = useVenuesContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	const [createNewBand, setCreateNewBand] = useState(true);
	const [createNewSupportBand, setCreateNewSupportBand] = useState(true);
	const [createNewCity, setCreateNewCity] = useState(true);
	const [createNewVenue, setCreateNewVenue] = useState(true);

	const [display, setDisplay] = useState(false);
	const [supportDisplay, setSupportDisplay] = useState(false);
	const [cityDisplay, setCityDisplay] = useState(false);
	const [venueDisplay, setVenueDisplay] = useState(false);
	const [headline_band, setHeadline_band] = useState('');
	const [support_band, setSupport_band] = useState('');
	const [gig_date, setGig_date] = useState('');
	const [venue, setVenue] = useState('');
	const [city, setCity] = useState('');
	const [gig_details, setGig_details] = useState('');
	const [isFestival, setIsFestival] = useState(false);

	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}
		// check if new band and action
		if (createNewBand === false) {
			log('new gig, existing band');
			// gig = { headline_band, venue, city, gig_date, gig_details };
		}
		if (createNewBand === true) {
			log('new gig, create new band');
			// gig = { headline_band, venue, city, gig_date, gig_details };
			const band = { name: headline_band };
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
				{
					// const response = await fetch('/api/weights', {
					method: 'POST',
					body: JSON.stringify(band),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			log(json, 'json creating band in form post submit');
			if (!response.ok) {
				setError(json.error);
			}
			if (response.ok) {
				setError(null);
				log('new band added', json);
				bandDispatch({ type: 'CREATE_BAND', payload: json });
			}
			log('new band added', json);
		}
		log('new band added, now adding gig');
		// const handleClose = () => {
		// 	navigate('/home');
		// 	// setIsFormActive(!isFormActive);
		// };
		// }
		// check if new band (support) and action
		if (createNewSupportBand === false) {
			log('new gig, existing band');
			// gig = { headline_band, venue, city, gig_date, gig_details };
		}
		if (createNewSupportBand === true) {
			log('new gig, create new support band');
			// gig = { headline_band, venue, city, gig_date, gig_details };
			const band = { name: support_band };
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
				{
					// const response = await fetch('/api/weights', {
					method: 'POST',
					body: JSON.stringify(band),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			log(json, 'json creating band in form post submit');
			if (!response.ok) {
				setError(json.error);
			}
			if (response.ok) {
				setError(null);
				log('new band added', json);
				bandDispatch({ type: 'CREATE_BAND', payload: json });
			}
			log('new  support band added', json);
		}
		log('new band added, now adding gig');
		// const handleClose = () => {
		// 	navigate('/home');
		// 	// setIsFormActive(!isFormActive);
		// };
		// }

		// check if new venue and action
		if (createNewVenue === false) {
			log('new gig, existing venue');
			// gig = { headline_band, venue, venue, gig_date, gig_details };
		}
		if (createNewVenue === true) {
			log('new gig, create new venue');
			// gig = { headline_band, venue, city, gig_date, gig_details };
			const currentVenue = { name: venue };
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/venues`,
				{
					// const response = await fetch('/api/weights', {
					method: 'POST',
					body: JSON.stringify(currentVenue),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			log(json, 'json creating venue in form post submit');
			if (!response.ok) {
				setError(json.error);
			}
			if (response.ok) {
				setError(null);
				log('new city added', json);
				venueDispatch({ type: 'CREATE_VENUE', payload: json });
			}
			log('new venue added', json);
		}

		// check if new city and action
		if (createNewCity === false) {
			log('new gig, existing city');
			// gig = { headline_band, venue, city, gig_date, gig_details };
		}
		if (createNewCity === true) {
			log('new gig, create new city');
			// gig = { headline_band, venue, city, gig_date, gig_details };
			const currentCity = { name: city };
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/cities`,
				{
					// const response = await fetch('/api/weights', {
					method: 'POST',
					body: JSON.stringify(currentCity),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			log(json, 'json creating city in form post submit');
			if (!response.ok) {
				setError(json.error);
			}
			if (response.ok) {
				setError(null);
				log('new city added', json);
				cityDispatch({ type: 'CREATE_CITY', payload: json });
			}
			log('new city added', json);
		}
		log('new city added, now adding gig');

		const gig = {
			headline_band,
			support_band,
			venue,
			city,
			gig_date,
			gig_details,
			isFestival,
		};
		log(gig, 'gig post submit');

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/gigs`,
			{
				// const response = await fetch('/api/weights', {
				method: 'POST',
				body: JSON.stringify(gig),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();

		log(json, 'json in form post submit');

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			// setNewWeight('');
			setVenue('');
			setCity('');
			setHeadline_band('');
			setSupport_band('');
			setGig_date('');
			setGig_details('');
			setIsFestival(false);
			// setGig_details('');
			// setReps('');
			setError(null);
			setEmptyFields([]);
			log('new gig added', json);
			dispatch({ type: 'CREATE_GIG', payload: json });
		}
		// setIsFormActive(!isFormActive);
		notify();
		navigate('/home');
	};
	const handleClose = () => {
		navigate('/home');
		// setIsFormActive(!isFormActive);
	};

	// , {
	// 	style: {
	// 		border: '1px solid black',
	// 	},
	// }

	// create a toast
	const notify = () => {
		toast.success(`${headline_band} gig successfully added.`, {
			duration: 5000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};
	// // create a toast
	// const notify = () => {
	// 	toast.success(`${headline_band} gig successfully added.`, {
	// 		duration: 3000,
	// 	});
	// };

	return (
		<StyledForm
			className='create'
			onSubmit={handleSubmit}
			// initial={{ height: 0 }}
			// 			animate={{ height: '80%' }}
		>
			<h3>
				Add a gig
				<CgCloseR className='close-icon' onClick={handleClose} />
			</h3>

			<div className='input-wrapper-band'>
				{/* <span className="field-required">*</span> */}
				<label>
					Headline Band:<span className='field-required'>*</span>
				</label>
				<GigFormBands
					setDisplay={setDisplay}
					display={display}
					setHeadline_band={setHeadline_band}
					headline_band={headline_band}
					emptyFields={emptyFields}
					setCreateNewBand={setCreateNewBand}
				/>
			</div>
			<div className='input-wrapper-band'>
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
			{/* <div className='input-wrapper'>
				<label>Headline Band:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setHeadline_band(e.target.value)}
					value={headline_band}
					className={emptyFields.includes('headline_band') ? 'error' : ''}
					autoFocus
				/>
			</div> */}

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
			</div>
			{/* <div className='input-wrapper-band'>
				<label>Venue:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setVenue(e.target.value)}
					value={venue}
					className={emptyFields.includes('venue') ? 'error' : ''}
				/>
			</div> */}
			<div className='input-wrapper-band'>
				<label>
					City:<span className='field-required'>*</span>
				</label>
				<GigFormCities
					setCityDisplay={setCityDisplay}
					cityDisplay={cityDisplay}
					setCity={setCity}
					city={city}
					emptyFields={emptyFields}
					setCreateNewCity={setCreateNewCity}
				/>
			</div>
			{/* <div className='input-wrapper-band'>
				<label>City:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setCity(e.target.value)}
					value={city}
					className={emptyFields.includes('city') ? 'error' : ''}
					// autoFocus
				/>
			</div> */}
			<div className='small-input-wrappers'>
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
			</div>
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
			<div className='input-wrapper-band'>
				<label>details:</label>
				<textarea
					id='input-area'
					cols='30'
					rows='3'
					onChange={(e) => setGig_details(e.target.value)}
					value={gig_details}
				></textarea>
				{/* <input
					type='text'
					id='input-number'
					onChange={(e) => setGig_details(e.target.value)}
					value={gig_details}
				/> */}
			</div>
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
				{error && <div className='error'>{error}</div>}
				<button className='add-btn'>Add Gig</button>
			</div>
		</StyledForm>
	);
};
const StyledForm = styled.form`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	/* padding: 1rem 2rem 2rem 2rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 0.5rem;
	/* row-gap: 1rem; */
	flex: 1;
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
				flex: 1;
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
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		flex: 1;
		justify-content: flex-end;
		.add-btn {
			color: ${({ theme }) => theme.white};
			font-weight: bolder;
			text-transform: uppercase;
			font-size: 1.6rem;
		}
	}
`;

export default GigsForm;
