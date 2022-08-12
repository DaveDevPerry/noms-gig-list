import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GigsContextProvider } from './context/GigContext';
import { AuthContextProvider } from './context/AuthContext';
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
				<App />
			</GigsContextProvider>
			{/* </TargetsContextProvider> */}
			{/* </UsersContextProvider> */}
			{/* </GroupsContextProvider> */}
		</AuthContextProvider>
	</React.StrictMode>
);
