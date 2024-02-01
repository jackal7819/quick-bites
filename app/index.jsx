import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Restaurants from './restaurants';
import { StatusBar } from 'expo-status-bar';

const App = () => {
	return (
		<>
			<Restaurants />
			<StatusBar style="auto" />
		</>
	);
};

export default App;
