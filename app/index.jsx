import {
	Lato_400Regular,
	useFonts as useLato,
} from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import { StatusBar } from 'expo-status-bar';

import Restaurants from './restaurants';

const App = () => {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!latoLoaded || !oswaldLoaded) {
		return null;
	}

	return (
		<>
			<Restaurants />
			<StatusBar style="auto" />
		</>
	);
};

export default App;
