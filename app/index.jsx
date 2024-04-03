import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import Restaurants from './restaurants';
import { theme } from '../theme';

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Restaurants />
			</ThemeProvider>
			<StatusBar style="auto" />
		</>
	);
};

export default App;
