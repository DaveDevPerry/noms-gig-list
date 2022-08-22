import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { log } from '../helper';
// import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';

const GigFormVenues = ({
	setVenueDisplay,
	venueDisplay,
	setVenue,
	emptyFields,
	setCreateNewVenue,
}) => {
	const { user } = useAuthContext();
	// const [display, setVenueDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);

	useEffect(() => {
		const fetchAllVenues = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/venues`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			if (response.ok) {
				setOptions(json);
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchAllVenues();
		}
	}, []);

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
			setVenueDisplay(false);
		}
	};

	const setVenueDex = (poke) => {
		log(poke, 'poke setVenueDex');
		setSearch(poke);
		setVenue(poke);
		setCreateNewVenue(false);
		setVenueDisplay(false);
	};

	return (
		<StyledGigFormVenues className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => setVenueDisplay(!venueDisplay)}
				className={emptyFields.includes('venue') ? 'error' : ''}
				// autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setVenue(event.target.value);
				}}
				autoComplete='off'
			/>
			{venueDisplay && (
				<div className='autoContainer'>
					{options
						.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setVenueDex(v.name)}
								>
									<span>{v.name}</span>
								</div>
							);
						})}
				</div>
			)}
		</StyledGigFormVenues>
	);
};
const StyledGigFormVenues = styled.div`
	position: relative;
	.autoContainer {
		position: absolute;
		background-color: ${({ theme }) => theme.white};
		z-index: 500;
		width: 100%;
		padding: 0 1rem;
		left: 0;
		border: 1px solid ${({ theme }) => theme.primaryColor};
		.option {
			padding: 0.3rem 0;
		}
	}
`;

export default GigFormVenues;
