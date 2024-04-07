import { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfo from './RestaurantInfo';

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
				data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
				renderItem={() => <RestaurantInfo />}
				keyExtractor={(item) => item.name}
				className="p-5"
			/>
		</SafeAreaView>
	);
};

export default RestaurantList;
