import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { BsPlusCircleFill } from 'react-icons/bs';
// import { BsPlusCircleFill, BsMusicNoteList } from 'react-icons/bs';
// import GigForm from './GigForm';
// import { useState } from 'react';
// import {  motion } from 'framer-motion';
// import { AnimatePresence, motion } from 'framer-motion';
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
	// const [isFormActive, setIsFormActive] = useState(false);

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
			{/* <AnimatePresence exitBeforeEnter>
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
			</AnimatePresence> */}
		</StyledFooter>
	);
};
const StyledFooter = styled.footer`
	background: ${({ theme }) => theme.white};
	position: relative;
	transition: all 200ms linear;
	nav {
		max-width: 100rem;
		margin: 0 auto;
		div {
			max-width: 100rem;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			a {
				color: ${({ theme }) => theme.txtDarkGrey};
				text-decoration: none;
				flex: 1;
				text-align: center;
				text-transform: uppercase;
				font-weight: bold;
				padding: 1rem 0 0.5rem 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.nav-icon {
					font-size: 2rem;
					color: ${({ theme }) => theme.txtGrey};
					position: relative;
				}
				&:hover {
					color: ${({ theme }) => theme.secondaryColor};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
				}
				&.active {
					color: ${({ theme }) => theme.secondaryColor};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
				}

				p {
					text-transform: uppercase;
					font-size: 1rem;
					font-weight: normal;
				}
			}
			a:before,
			a:after {
				position: absolute;
				-webkit-transition: all 0.8s ease;
				transition: all 0.8s ease;
				/* -webkit-transition: all 0.5s ease;
				transition: all 0.5s ease; */
			}
			a:before {
				/* top: 5px; */
				top: 0;
				display: block;
				height: 3px;
				width: 0%;
				content: '';
				background-color: ${({ theme }) => theme.secondaryColor};
				/* background-color: #c0392b; */
			}
			a:after {
				left: 0;
				/* top: 5px; */
				top: 0;
				padding: 0.5em 0;
				position: absolute;
				content: '';
				color: #ffffff;
				white-space: nowrap;
				max-width: 0%;
				overflow: hidden;
			}
			a:hover:before {
				opacity: 1;
				width: 4.5rem;
			}
			a.active:before {
				opacity: 1;
				width: 4.5rem;
			}
			a:hover:after {
				/* opacity: 1; */
				max-width: 100%;
			}
			.add-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 3.5rem;
			}
		}
	}
`;

// const StyledGigModel = styled(motion.div)`
// 	position: absolute;
// 	top: 0;
// 	left: 50%;
// 	width: max-content;

// 	transform: translate(-50%, -100%);

// `;

export default Footer;
