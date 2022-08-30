import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { log } from '../helper';
// import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';

const GigFormCities = ({
	setCityDisplay,
	cityDisplay,
	setCity,
	emptyFields,
	setCreateNewCity,
}) => {
	const { user } = useAuthContext();
	// const [display, setCityDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);

	useEffect(() => {
		const fetchAllCities = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/cities`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			const clonedCities = [...json];
			const sortedCities = clonedCities.sort((a, b) => {
				return a.name > b.name ? 1 : -1;
			});

			if (response.ok) {
				setOptions(sortedCities);
				// setOptions(json);
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchAllCities();
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
			setCityDisplay(false);
		}
	};

	const setCityDex = (poke) => {
		log(poke, 'poke setCityDex');
		setSearch(poke);
		setCity(poke);
		setCreateNewCity(false);
		setCityDisplay(false);
	};

	return (
		<StyledGigFormCities className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => setCityDisplay(!cityDisplay)}
				className={emptyFields.includes('city') ? 'error' : ''}
				// autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setCity(event.target.value);
				}}
				autoComplete='off'
				required
			/>
			{cityDisplay && (
				<div className='autoContainer'>
					{options
						.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setCityDex(v.name)}
								>
									<span>{v.name}</span>
								</div>
							);
						})}
				</div>
			)}
		</StyledGigFormCities>
	);
};
const StyledGigFormCities = styled.div`
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

export default GigFormCities;
