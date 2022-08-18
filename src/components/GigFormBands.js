import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import styled from 'styled-components';
// import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';

const GigFormBands = ({
	setDisplay,
	display,
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
				setOptions(json);
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
		console.log(poke, 'poke setBandDex');
		setSearch(poke);
		setHeadline_band(poke);
		setCreateNewBand(false);
		setDisplay(false);
	};

	return (
		<div className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => setDisplay(!display)}
				className={emptyFields.includes('headline_band') ? 'error' : ''}
				autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setHeadline_band(event.target.value);
				}}
				autoComplete='off'
			/>
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
		</div>
	);
};

export default GigFormBands;
