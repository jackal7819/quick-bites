import { FlatList, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

import RestaurantInfo from './RestaurantInfo';
import { restaurants } from '../data';

const RestaurantList = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

	const handleSearch = (text) => {
		const filtered = restaurants.filter((restaurant) =>
			restaurant.name.toLowerCase().includes(text.toLowerCase()),
		);
		setFilteredRestaurants(filtered);
		setSearchQuery(text);
	};

	return (
		<SafeAreaView className="flex-1 font-[Oswald_400Regular]">
			{/* SEARCHBAR */}
			<View className="p-5 pb-0">
				<Searchbar
					placeholder="Search"
					onChangeText={handleSearch}
					value={searchQuery}
				/>
			</View>
			{/* RESTAURANT LIST */}
			<FlatList
				data={filteredRestaurants}
				renderItem={({ item }) => (
					<RestaurantInfo restaurant={item} rounded="3xl" mb="5" />
				)}
				keyExtractor={(item) => item.name}
				className="px-5 pb-5 mt-5"
			/>
		</SafeAreaView>
	);
};

export default RestaurantList;
