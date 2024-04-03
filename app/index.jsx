import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import Restaurants from './restaurants';
import { theme } from '../theme';

const App = () => {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded && !latoLoaded) {
		return null;
	}

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
