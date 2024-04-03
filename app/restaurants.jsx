import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

import RestaurantInfoCard from '../components/RestaurantInfoCard'

const Restaurants = () => {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar
					placeholder="Search"
					onChangeText={setSearchQuery}
					value={searchQuery}
				/>
			</View>
			<View style={styles.list}>
				<RestaurantInfoCard />
			</View>
		</SafeAreaView>
	);
};

export default Restaurants;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	search: {
		padding: 16,
		backgroundColor: 'white',
	},
	list: {
		flex: 1,
		padding: 16,
		backgroundColor: 'blue',
	},
});
