import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { log } from '../helper';
import { useStateContext } from '../lib/context';
// import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';

const SearchFormCities = ({
	setSearchCityDisplay,
	searchCityDisplay,
	setCityNameSearchValue,
	setError,
	// setHeadline_band,
	// emptyFields,
	// setCreateNewBand,
}) => {
	const { user } = useAuthContext();
	const { setCityToView } = useStateContext();
	// const [display, setDisplay] = useState(false);
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
			setSearchCityDisplay(false);
		}
	};

	const setSearchCityDex = (poke) => {
		log(poke, 'poke setSearchCityDex');
		setSearch(poke);
		setCityNameSearchValue(poke);
		// setHeadline_band(poke);
		// setCreateNewBand(false);
		setCityToView(poke);
		setSearchCityDisplay(false);
	};

	return (
		<StyledSearchFormCities className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => {
					// setError(null);
					setSearchCityDisplay(!searchCityDisplay);
				}}
				// onClick={() => setSearchCityDisplay(!searchCityDisplay)}
				// className={emptyFields.includes('headline_band') ? 'error' : ''}
				// autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setCityToView(event.target.value);
					setCityNameSearchValue(event.target.value);
				}}
				autoComplete='off'
				// required
			/>
			{/* {display && options.length > 0 && ( */}
			{searchCityDisplay && (
				<div className='autoContainer'>
					{options
						.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setSearchCityDex(v.name)}
								>
									<span>{v.name}</span>
								</div>
							);
						})}
				</div>
			)}
		</StyledSearchFormCities>
	);
};
const StyledSearchFormCities = styled.div`
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

export default SearchFormCities;
