import React from 'react';
// import { useTargetsContext } from '../hooks/useTargetsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Toggle from '../components/Toggler';
import Navbar from '../components/Navbar';
// import TargetForm from '../components/TargetForm';
import { CgCloseR } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import AppDetails from '../components/AppDetails';
// import { useEffect } from 'react';
// import UserForm from '../components/UserForm';

const Settings = ({ themeToggler, theme }) => {
	// const { targets, dispatch } = useTargetsContext();
	// const { user } = useAuthContext();

	const navigate = useNavigate();

	// useEffect(() => {
	// 	const fetchTargets = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/targets`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			dispatch({
	// 				type: 'SET_TARGETS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchTargets();
	// 	}
	// }, [dispatch, user]);

	const handleClose = () => {
		navigate('/home');
	};
	// log(targets, 'targets');
	return (
		<StyledSettings
			className='settings-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='settings-modal'>
				<h3>
					User settings
					<CgCloseR className='close-icon' onClick={handleClose} />
				</h3>

				<Toggle toggleTheme={themeToggler} theme={theme} />
				<Navbar />
				{/* <Navbar targets={targets} /> */}
				{/* {!targets && <TargetForm />} */}
				{/* {targets && targets.length === 0 && <TargetForm />} */}
				{/* <UserForm /> */}

				{/* <a
					href='https://www.daveperry.tech'
					className='developer-link'
					rel='noopener noreferrer'
					target='_blank'
				>
					developed by © daveperry.tech 2022
				</a> */}
			</div>
			{/* <h3>
				User settings
				<CgCloseR className='close-icon' onClick={handleClose} />
			</h3>

			<Toggle toggleTheme={themeToggler} theme={theme} />
			<Navbar />
		

			<a
				href='https://www.daveperry.tech'
				className='developer-link'
				rel='noopener noreferrer'
				target='_blank'
			>
				developed by © daveperry.tech 2022
			</a> */}
			<AppDetails />
		</StyledSettings>
	);
};
const StyledSettings = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	row-gap: 1rem;
	padding: 2rem;
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	transition: all 200ms linear; */

	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	flex: 1;
	max-width: 42rem;
	padding: 0 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	/* margin: 1rem; */
	.settings-modal {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		background: ${({ theme }) => theme.white};
		border-radius: 4px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
		transition: all 200ms linear;
		/* flex: 1; */
	}
	h3 {
		text-align: center;
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
	/* a.developer-link {
		text-decoration: none;
		align-self: center;
		margin-top: 6rem;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtDarkGrey};
	} */
`;

export default Settings;
