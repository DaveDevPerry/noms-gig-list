import { Link, NavLink } from 'react-router-dom';
// import {  Navigate } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
// import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';
// import { HiPresentationChartLine } from 'react-icons/hi';
// import { GrHomeRounded } from 'react-icons/gr';
import { BsPlusCircleFill } from 'react-icons/bs';
import { RiHomeLine } from 'react-icons/ri';

// import { RiGroup2Fill } from 'react-icons/ri';

const Header = () => {
	// const { logout } = useLogout();
	// const { user } = useAuthContext();

	// const handleClick = () => {
	// 	logout();
	// };
	return (
		<StyledHeader>
			<div className='container'>
				<Link to='/'>
					<h1>Gig List</h1>
				</Link>

				{/* <NavLink
					to='/groups'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<RiGroup2Fill className='settings-icon' />
				</NavLink> */}
				<nav className='top-nav'>
					<NavLink
						to='/gigs/new'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<BsPlusCircleFill className='add-icon' />
					</NavLink>
					<NavLink
						to='/home'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						{/* <HiPresentationChartLine className='nav-icon' /> */}
						{/* <GrHomeRounded className='nav-icon' /> */}
						<RiHomeLine className='nav-icon' />
					</NavLink>
					<NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<IoSettingsOutline className='settings-icon' />
					</NavLink>
				</nav>
			</div>
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
	background: ${({ theme }) => theme.white};
	transition: all 200ms linear;
	.container {
		max-width: 60rem;
		/* max-width: 1400px; */
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		h1 {
			font-size: 2rem;
			color: ${({ theme }) => theme.secondaryColor};
		}
		a {
			display: grid;
			place-content: center;
			.settings-icon {
				color: ${({ theme }) => theme.txtDarkGrey};
				font-size: 3rem;
			}
			.nav-icon {
				color: ${({ theme }) => theme.txtDarkGrey};
				font-size: 3rem;
			}
		}
		a.active {
			.settings-icon {
				color: ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.primaryColor}; */
			}
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.primaryColor}; */
			}
		}
		.add-icon {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 2.6rem;
		}
		nav.top-nav {
			display: flex;
			align-items: center;
			/* justify-content: space-between; */
			column-gap: 1rem;
		}
	}
	/* nav {
			display: flex;
			align-items: center;
			text-align: right;
		}
		nav a,
		nav button {
			margin-left: 1rem;
		}
		nav button {
			background: ${({ theme }) => theme.white};
			color: ${({ theme }) => theme.primaryColor};
			border: 2px solid ${({ theme }) => theme.primaryColor};
			padding: 0.3rem 0.6rem;
			border-radius: 0.4rem;
			font-family: 'Poppins';
			cursor: pointer;
			font-size: 1em;
		} */
`;

export default Header;
