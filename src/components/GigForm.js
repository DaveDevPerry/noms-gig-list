import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { CgCloseR } from 'react-icons/cg';
// import { motion } from 'framer-motion';

const GigsForm = ({ isFormActive, setIsFormActive }) => {
	const { dispatch } = useGigsContext();
	const { user } = useAuthContext();

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
		const gig = { headline_band, venue, city, gig_date, gig_details };

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
			// console.log('new weight added', json);
			dispatch({ type: 'CREATE_GIG', payload: json });
		}
		setIsFormActive(!isFormActive);
	};
	const handleClose = () => {
		// navigate('/home');
		setIsFormActive(!isFormActive);
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
				<input
					type='text'
					id='input-number'
					onChange={(e) => setHeadline_band(e.target.value)}
					value={headline_band}
					className={emptyFields.includes('headline_band') ? 'error' : ''}
					autoFocus
				/>
			</div>

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
			color: ${({ theme }) => theme.white};
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
