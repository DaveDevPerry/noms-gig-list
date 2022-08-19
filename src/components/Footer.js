import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { BsPlusCircleFill } from 'react-icons/bs';
// import { BsPlusCircleFill, BsMusicNoteList } from 'react-icons/bs';
import GigForm from './GigForm';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import { HiPresentationChartLine } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import {
	RiMenuFoldFill,
	RiMenuUnfoldFill,
	RiRoadMapLine,
} from 'react-icons/ri';
// import { GrMap } from 'react-icons/gr';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
// import { IoScale } from 'react-icons/io5';

const Footer = () => {
	const { user } = useAuthContext();
	const [isFormActive, setIsFormActive] = useState(false);

	// const handleClick = () => {
	// 	// setIsFormActive(!isFormActive);
	// };

	return (
		<StyledFooter>
			<nav>
				{user && (
					<div>
						{/* <NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<HiPresentationChartLine className='nav-icon' />
						</NavLink> */}
						<NavLink
							to='/gigs'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							{/* Home */}
							<RiMenuUnfoldFill className='nav-icon' />
							<p>future</p>
							{/* <BsMusicNoteList className='nav-icon' /> */}
							{/* <HiPresentationChartLine className='nav-icon' /> */}
						</NavLink>
						{/* <NavLink
							to='/add-weight'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						> */}
						{/* <NavLink
							to='/gigs/new'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<BsPlusCircleFill className='add-icon' />
						</NavLink> */}

						<NavLink
							to='/bands'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<FaUsers className='nav-icon' />
							<p>bands</p>
						</NavLink>
						<NavLink
							to='/venues'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<MdOutlineMapsHomeWork className='nav-icon' />
							<p>venues</p>
						</NavLink>

						<NavLink
							to='/cities'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<RiRoadMapLine className='nav-icon' />
							<p>cities</p>
						</NavLink>
						{/* <NavLink
							to='/cities'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<GrMap className='nav-icon' />
						</NavLink> */}
						<NavLink
							to='/history'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<RiMenuFoldFill className='nav-icon' />
							<p>history</p>
						</NavLink>
						{/* <NavLink
							to='/bands'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<FaUsers className='nav-icon' />
						</NavLink> */}
					</div>
				)}
			</nav>
			<AnimatePresence exitBeforeEnter>
				{isFormActive && (
					<StyledGigModel
						initial={{ y: 0, translateX: '-50%' }}
						animate={{ translateY: '-100%' }}
						exit={{ translateY: '100%' }}
					>
						<GigForm
							isFormActive={isFormActive}
							setIsFormActive={setIsFormActive}
						/>
					</StyledGigModel>
				)}
			</AnimatePresence>
		</StyledFooter>
	);
};
const StyledFooter = styled.footer`
	background: ${({ theme }) => theme.white};
	position: relative;
	transition: all 200ms linear;
	/* z-index: 5; */
	nav {
		div {
			max-width: 1400px;
			/* padding: 1rem; */
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			/* justify-content: space-between; */
			a {
				color: ${({ theme }) => theme.txtDarkGrey};
				text-decoration: none;
				flex: 1;
				text-align: center;
				text-transform: uppercase;
				font-weight: bold;
				padding: 1rem 0 0.5rem 0;
				/* margin: 1rem; */
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				/* display: grid;
				place-content: center; */
				.nav-icon {
					font-size: 2rem;
					color: ${({ theme }) => theme.txtGrey};
				}
				&.active {
					color: ${({ theme }) => theme.secondaryColor};
					/* border: 2px solid ${({ theme }) => theme.secondaryColor}; */
					/* color: ${({ theme }) => theme.primaryColor};
					border: 2px solid ${({ theme }) => theme.primaryColor}; */
					/* border-radius: 0.4rem; */
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
					}
				}
				p {
					text-transform: uppercase;
					font-size: 1rem;
					font-weight: normal;
				}
			}
			.add-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 3.5rem;
			}
		}
	}
`;

const StyledGigModel = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 50%;
	width: max-content;
	/* margin: 1rem; */
	transform: translate(-50%, -100%);
	/* z-index: -1; */
`;

export default Footer;
