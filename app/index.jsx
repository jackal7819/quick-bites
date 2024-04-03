import { StatusBar } from 'expo-status-bar';

import Restaurants from './restaurants';

const App = () => {
	return (
		<>
			<Restaurants />
			<StatusBar style="auto" />
		</>
	);
};

export default App;
