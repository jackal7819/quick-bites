import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = `McDonald's`,
		icon,
		photos = [
			'https://images.unsplash.com/photo-1623156346149-d5cec8b29818?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		address = '123 Main Street',
		isOpenNow = true,
		rating = 5,
		isClosedTemporarily,
	} = restaurant;
	return (
		<Card elevation={5} style={styles.card}>
			<Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
			<Card.Title title={name} style={styles.title} subtitle={address} />
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
	},
	cover: {
		padding: 20,
		backgroundColor: 'white',
	},
	title: {
		padding: 20,
	},
});

export default RestaurantInfo;
