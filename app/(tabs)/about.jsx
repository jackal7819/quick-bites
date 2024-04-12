import { Text, View } from 'react-native';

export default function Tab() {
	return (
		<View className="flex-col items-center justify-center flex-1 gap-5 p-10">
			<Text className="text-3xl font-bold font-oswald">About</Text>
			<Text>
				Welcome to Quick Bites, your go-to app for exploring fake
				restaurants in Florida! Quick Bites is designed to provide you
				with an easy and enjoyable experience while discovering various
				dining options in the Sunshine State.
			</Text>
			<Text className="text-2xl font-bold">Features </Text>
			<Text>
				Browse through a curated list of fake restaurants located across
				Florida. Explore the interactive map to visualize the exact
				locations of these restaurants. Access detailed information
				about each restaurant, including its name, address, and other
				relevant details.
			</Text>
			<Text className="text-2xl font-bold">Why Quick Bites?</Text>
			<Text>
				Quick Bites offers a convenient way to virtually explore dining
				options in Florida. Whether you're planning a trip or simply
				curious about the restaurant scene in the area, Quick Bites has
				got you covered. With its intuitive interface and comprehensive
				restaurant listings, Quick Bites makes it easy to discover new
				dining experiences from the comfort of your own device.
			</Text>
		</View>
	);
}
