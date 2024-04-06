import { SafeAreaView, View } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

import RestaurantInfo from '../components/RestaurantInfo';

const Restaurants = () => {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<SafeAreaView className="flex-1 font-[Oswald_400Regular]">
			{/* SEARCHBAR */}
			<View className="p-5">
				<Searchbar
					placeholder="Search"
					onChangeText={setSearchQuery}
					value={searchQuery}
				/>
			</View>
			{/* RESTAURANT LIST */}
			<View className="flex-1 p-5">
				<RestaurantInfo />
			</View>
		</SafeAreaView>
	);
};

export default Restaurants;
