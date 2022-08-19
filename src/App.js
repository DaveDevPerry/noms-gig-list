import { BrowserRouter } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';

import { StateContext } from './lib/context';

// pages & components
import AnimatedRoutes from './AnimatedRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
// import { useState } from 'react';

function App() {
	const { user } = useAuthContext();

	// const {dataLoaded, setDataLoaded} = useStateContext()

	// const [dataLoaded, setDataLoaded] = useState(false);

	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<StateContext>
				<div className='App'>
					<BrowserRouter>
						<Header />
						<div className='pages'>
							<AnimatedRoutes
								user={user}
								themeToggler={themeToggler}
								theme={theme}
								// dataLoaded={dataLoaded}
								// setDataLoaded={setDataLoaded}
							/>
						</div>
						<Footer />
					</BrowserRouter>
				</div>
			</StateContext>
		</ThemeProvider>
	);
}

export default App;
