import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { CgCloseR } from 'react-icons/cg';
import { useBandsContext } from '../hooks/useBandsContext';
// import { motion } from 'framer-motion';

const Auto = ({
	setDisplay,
	display,
	headline_band,
	setHeadline_band,
	emptyFields,
	setCreateNewBand,
}) => {
	const { user } = useAuthContext();
	// const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);

	useEffect(() => {
		const fetchAllBands = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				// setHeadline_band(json);
				setOptions(json);
				// setOptions(allBands);
				// dispatch({
				// 	type: 'SET_BANDS',
				// 	payload: json,
				// });
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchAllBands();
		}
		// const allBands = [];
		// const promises =
		// 	// const promises = new Array(20)
		// 	// .fill()
		// 	// .map((v, i) =>
		// 	fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bands`);
		// // fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bands/${i + 1}`)
		// Promise.all(promises).then((bandsArr) => {
		// 	return bandsArr.map((res) =>
		// 		res.json().then(({ name }) => {
		// 			return allBands.push({ name });
		// 		})
		// 	);
		// });
		// setOptions(allBands);
	}, []);
	// useEffect(() => {
	// 	const allBands = [];
	// 	const promises =
	// 		// const promises = new Array(20)
	// 		// .fill()
	// 		// .map((v, i) =>
	// 		fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bands`);
	// 	// fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bands/${i + 1}`)
	// 	Promise.all(promises).then((bandsArr) => {
	// 		return bandsArr.map((res) =>
	// 			res.json().then(({ name }) => {
	// 				return allBands.push({ name });
	// 			})
	// 		);
	// 	});
	// 	setOptions(allBands);
	// }, []);

	// sets event listeners
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};

	const setBandDex = (poke) => {
		console.log(poke, 'poke setBandDex');
		setSearch(poke);
		setHeadline_band(poke);
		// if (options.includes(poke)) {
		// 	console.log(
		// 		poke,
		// 		headline_band,
		// 		search,
		// 		'setBandDex options includes poke'
		// 	);
		// }
		// if (!options.includes(poke)) {
		// 	console.log(
		// 		poke,
		// 		headline_band,
		// 		search,
		// 		'setBandDex options excludes poke'
		// 	);
		// }
		setCreateNewBand(false);
		setDisplay(false);
	};

	return (
		<div className='search-container' ref={wrapperRef}>
			<input
				// type='text'
				// id='input-number'
				id='auto'
				// placeholder='type to search'
				onClick={() => setDisplay(!display)}
				// value={headline_band}
				// onChange={(e) => setHeadline_band(e.target.value)}
				className={emptyFields.includes('headline_band') ? 'error' : ''}
				autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setHeadline_band(event.target.value);
				}}
				// onChange={(event) => setSearch(event.target.value)}
			/>
			{/* <input
					type='text'
					id='input-number'
					placeholder='type to search'
					onClick={() => setDisplay(!display)}
					value={headline_band}
					onChange={(e) => setHeadline_band(e.target.value)}
					className={emptyFields.includes('headline_band') ? 'error' : ''}
					autoFocus
				/> */}
			{display && (
				<div className='autoContainer'>
					{options
						.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setBandDex(v.name)}
								>
									<span>{v.name}</span>
									{/* <img src={v.sprite} alt='pokemon' /> */}
								</div>
							);
						})}
					{/* {headline_band
						.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setBandDex(v.name)}
								>
									<span>{v.name}</span>
								</div>
							);
						})} */}
				</div>
			)}
		</div>
	);
};

const GigsForm = ({ isFormActive, setIsFormActive }) => {
	const navigate = useNavigate();

	const { dispatch } = useGigsContext();
	const { dispatch: bandDispatch } = useBandsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	const [createNewBand, setCreateNewBand] = useState(true);

	const [display, setDisplay] = useState(false);
	const [headline_band, setHeadline_band] = useState('');
	const [gig_date, setGig_date] = useState('');
	const [venue, setVenue] = useState('');
	const [city, setCity] = useState('');
	const [gig_details, setGig_details] = useState('');

	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}
		// let gig;
		if (createNewBand === false) {
			console.log('new gig, existing band');
			// gig = { headline_band, venue, city, gig_date, gig_details };
		}
		if (createNewBand === true) {
			console.log('new gig, create new band');
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
			console.log(json, 'json creating band in form post submit');
			if (!response.ok) {
				setError(json.error);
			}
			if (response.ok) {
				// setNewWeight('');
				// setVenue('');
				// setCity('');
				// setHeadline_band('');
				// setGig_date('');
				// setGig_details('');
				// setGig_details('');
				// setReps('');
				setError(null);
				// setEmptyFields([]);
				console.log('new band added', json);
				bandDispatch({ type: 'CREATE_BAND', payload: json });
			}
			// setIsFormActive(!isFormActive);
			// navigate('/home');
			console.log('new band added', json);
		}
		console.log('new band added, now adding gig');
		// const handleClose = () => {
		// 	navigate('/home');
		// 	// setIsFormActive(!isFormActive);
		// };
		// }
		const gig = { headline_band, venue, city, gig_date, gig_details };
		console.log(gig, 'gig post submit');

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

		console.log(json, 'json in form post submit');

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			// setNewWeight('');
			setVenue('');
			setCity('');
			setHeadline_band('');
			setGig_date('');
			setGig_details('');
			// setGig_details('');
			// setReps('');
			setError(null);
			setEmptyFields([]);
			console.log('new gig added', json);
			dispatch({ type: 'CREATE_GIG', payload: json });
		}
		// setIsFormActive(!isFormActive);
		navigate('/home');
	};
	const handleClose = () => {
		navigate('/home');
		// setIsFormActive(!isFormActive);
	};

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

			<div className='input-wrapper'>
				<label>Headline Band:</label>
				<Auto
					setDisplay={setDisplay}
					display={display}
					setHeadline_band={setHeadline_band}
					headline_band={headline_band}
					emptyFields={emptyFields}
					setCreateNewBand={setCreateNewBand}
				/>
				{/* <input
					type='text'
					id='input-number'
					placeholder='type to search'
					onClick={() => setDisplay(!display)}
					value={headline_band}
					onChange={(e) => setHeadline_band(e.target.value)}
					className={emptyFields.includes('headline_band') ? 'error' : ''}
					autoFocus
				/> */}
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

			<div className='input-wrapper'>
				<label>Venue:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setVenue(e.target.value)}
					value={venue}
					className={emptyFields.includes('venue') ? 'error' : ''}
					// autoFocus
				/>
			</div>
			<div className='input-wrapper'>
				<label>City:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setCity(e.target.value)}
					value={city}
					className={emptyFields.includes('city') ? 'error' : ''}
					// autoFocus
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
			</div>
			<div className='input-wrapper'>
				<label>details:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setGig_details(e.target.value)}
					value={gig_details}
					className={emptyFields.includes('gig_details') ? 'error' : ''}
					// autoFocus
				/>
			</div>

			<button className='add-btn'>Add Gig</button>
			{error && <div className='error'>{error}</div>}
		</StyledForm>
	);
};
const StyledForm = styled.form`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem 2rem 2rem 2rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 1rem;
	p.form-title {
		padding: 0 2rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 0.9em;
		text-align: center;
		margin-top: 1rem;
	}
	h3 {
		text-align: center;
		margin: 0;
		position: relative;
		color: ${({ theme }) => theme.txtDarkGrey};
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.txtDarkGrey};
		}
	}
	.input-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 1rem;
		label {
			font-size: 0.9em;
			text-align: right;
			flex: 1;
		}
		#input-number {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.black};
			flex: 1;
		}
	}
	.add-btn {
		color: ${({ theme }) => theme.white};
		font-weight: bolder;
		text-transform: uppercase;
		font-size: 1.6rem;
	}
`;

export default GigsForm;
