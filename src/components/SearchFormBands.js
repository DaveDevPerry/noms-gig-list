import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { log } from '../helper';
import { useStateContext } from '../lib/context';
// import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';

const SearchFormBands = ({
	setDisplay,
	display,
	setBandNameSearchValue,
	setError,
	// setHeadline_band,
	// emptyFields,
	// setCreateNewBand,
}) => {
	const { user } = useAuthContext();
	const { setBandToView } = useStateContext();
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
			const clonedBands = [...json];
			const sortedBands = clonedBands.sort((a, b) => {
				return a.name > b.name ? 1 : -1;
			});

			if (response.ok) {
				setOptions(sortedBands);
				// setOptions(json);
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchAllBands();
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
			setDisplay(false);
		}
	};

	const setBandDex = (poke) => {
		log(poke, 'poke setBandDex');
		setSearch(poke);
		// setHeadline_band(poke);
		// setCreateNewBand(false);
		setBandNameSearchValue(poke);
		setBandToView(poke);
		setDisplay(false);
	};

	return (
		<StyledSearchFormBands className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => {
					// setError(null);
					setDisplay(!display);
				}}
				// onClick={() => setDisplay(!display)}
				// className={emptyFields.includes('headline_band') ? 'error' : ''}
				autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setBandToView(event.target.value);
					setBandNameSearchValue(event.target.value);
				}}
				autoComplete='off'
				// required
			/>
			{/* {display && options.length > 0 && ( */}
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
								</div>
							);
						})}
				</div>
			)}
		</StyledSearchFormBands>
	);
};
const StyledSearchFormBands = styled.div`
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

export default SearchFormBands;
