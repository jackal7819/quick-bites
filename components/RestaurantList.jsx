import { FlatList, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

import RestaurantInfo from './RestaurantInfo';
import { restaurants } from '../data';

const RestaurantList = () => {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<SafeAreaView className="flex-1 font-[Oswald_400Regular]">
			{/* SEARCHBAR */}
			<View className="p-5 pb-0">
				<Searchbar
					placeholder="Search"
					onChangeText={setSearchQuery}
					value={searchQuery}
				/>
			</View>
			{/* RESTAURANT LIST */}
			<FlatList
				data={restaurants}
				renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
				keyExtractor={(item) => item.name}
				className="px-5 pb-5 mt-5"
			/>
		</SafeAreaView>
	);
};

export default RestaurantList;
