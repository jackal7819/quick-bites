import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import RestaurantInfo from '../components/RestaurantInfo'
import { restaurants } from '../data';

const Restaurant = () => {
	const { name } = useLocalSearchParams();
	const restaurant = restaurants.find((restaurant) => restaurant.name === name);
	return (
		<View>
			<Stack.Screen options={{ title: name }} />
			<Text>{name}</Text>
			<RestaurantInfo restaurant={restaurant} />
		</View>
	);
};

export default Restaurant;
