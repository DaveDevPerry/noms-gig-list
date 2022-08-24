import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup, isLoading, error } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(email, password);
	};

	return (
		<StyledSignup
			className='signup-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<form onSubmit={handleSubmit} className='signup'>
				<h3>Sign up</h3>
				<div>
					<label>Email:</label>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>

				<button className='action-btn' disabled={isLoading}>
					Sign up
				</button>
				{error && <div className='error'>{error}</div>}
			</form>

			<p>
				Got an account? Log in<Link to='/login'> here</Link>
			</p>
		</StyledSignup>
	);
};
const StyledSignup = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	margin: 0 auto;
	max-width: 42rem;
	padding: 0 1rem;
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	.signup {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		background: ${({ theme }) => theme.white};
		border-radius: 4px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
		h3 {
			text-align: center;
			margin: 0;
			color: ${({ theme }) => theme.txtDarkGrey};
		}
		input {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.txtGrey};
			flex: 1;
			&:focus {
				outline: none;
				border: none;
				border: 2px solid ${({ theme }) => theme.primaryColor};
				border-radius: 4px;
				box-sizing: border-box;
			}
		}
		.action-btn {
			color: ${({ theme }) => theme.white};
			font-weight: bolder;
			text-transform: uppercase;
			font-size: 1.6rem;
		}
	}
	p {
		text-align: center;
		color: ${({ theme }) => theme.txtDarkGrey};
		a {
			color: ${({ theme }) => theme.secondaryColor};
			text-decoration: none;
		}
	}
`;

export default Signup;
