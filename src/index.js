import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GigsContextProvider } from './context/GigContext';
import { AuthContextProvider } from './context/AuthContext';
import { BandsContextProvider } from './context/BandContext';
import { CitiesContextProvider } from './context/CityContext';
import { VenuesContextProvider } from './context/VenueContext';
// import { TargetsContextProvider } from './context/TargetContext';
// import { GroupsContextProvider } from './context/GroupContext';
// import { UsersContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			{/* <GroupsContextProvider> */}
			{/* <UsersContextProvider> */}
			{/* <TargetsContextProvider> */}
			<GigsContextProvider>
				<BandsContextProvider>
					<VenuesContextProvider>
						<CitiesContextProvider>
							<App />
						</CitiesContextProvider>
					</VenuesContextProvider>
				</BandsContextProvider>
			</GigsContextProvider>
			{/* </TargetsContextProvider> */}
			{/* </UsersContextProvider> */}
			{/* </GroupsContextProvider> */}
		</AuthContextProvider>
	</React.StrictMode>
);
