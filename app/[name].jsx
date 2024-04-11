import { List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import RestaurantInfo from '../components/RestaurantInfo';
import { restaurants } from '../data';

const RestaurantDetails = () => {
	const [breakfastExpanded, setBreakfastExpanded] = useState(false);
	const [lunchExpanded, setLunchExpanded] = useState(false);
	const [dinnerExpanded, setDinnerExpanded] = useState(false);
	const [drinksExpanded, setDrinksExpanded] = useState(false);

	const { name } = useLocalSearchParams();
	const restaurant = restaurants.find(
		(restaurant) => restaurant.name === name,
	);

	return (
		<>
			<Stack.Screen options={{ title: name }} />
			<RestaurantInfo restaurant={restaurant} rounded="none" />
			<ScrollView>
				<List.Accordion
					title="Breakfast"
					left={(props) => (
						<List.Icon {...props} icon="bread-slice" />
					)}
					expanded={breakfastExpanded}
					onPress={() => setBreakfastExpanded(!breakfastExpanded)}
				>
					<List.Item title="Eggs and toast" />
					<List.Item title="Classic breakfast" />
					<List.Item title="Pancakes" />
				</List.Accordion>
				<List.Accordion
					title="Lunch"
					left={(props) => <List.Icon {...props} icon="hamburger" />}
					expanded={lunchExpanded}
					onPress={() => setLunchExpanded(!lunchExpanded)}
				>
					<List.Item title="Burger and fries" />
					<List.Item title="Steak and salad" />
					<List.Item title="Mushroom and cheese" />
				</List.Accordion>
				<List.Accordion
					title="Dinner"
					left={(props) => (
						<List.Icon {...props} icon="food-variant" />
					)}
					expanded={dinnerExpanded}
					onPress={() => setDinnerExpanded(!dinnerExpanded)}
				>
					<List.Item title="Tuna with rice" />
					<List.Item title="Philadelphia rolls" />
					<List.Item title="Salmon with fries" />
				</List.Accordion>
				<List.Accordion
					title="Drinks"
					left={(props) => <List.Icon {...props} icon="cup" />}
					expanded={drinksExpanded}
					onPress={() => setDrinksExpanded(!drinksExpanded)}
				>
					<List.Item title="Tea" />
					<List.Item title="Milk" />
					<List.Item title="Pepsi" />
				</List.Accordion>
			</ScrollView>
		</>
	);
};

export default RestaurantDetails;
