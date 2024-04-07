import { Card } from 'react-native-paper';
import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import open from '../assets/images/open';
import star from '../assets/images/star';

const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = `McDonald's`,
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://images.unsplash.com/photo-1623156346149-d5cec8b29818?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		address = '123 Main Street',
		isOpenNow = true,
		rating = 5,
		isClosedTemporarily = true,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));
	return (
		<Card elevation={1} className="p-3 mb-5 rounded-3xl bg-violet-50">
			{/* CARD COVER */}
			<Card.Cover key={name} source={{ uri: photos[0] }} />
			{/* TEXT BLOCK */}
			<View className="gap-3 pt-5 pb-3">
				{/* TITLE */}
				<Text className="text-lg text-slate-900 font-oswald">{name}</Text>
				{/* INFO */}
				<View className="flex-row justify-between">
					{/* RATING */}
					<View className="flex-row items-center">
						{ratingArray.map((_, index) => (
							<SvgXml
								xml={star}
								width={20}
								height={20}
								key={index}
							/>
						))}
					</View>
					{/* OPEN/CLOSED TEMPORARILY */}
					<View className="flex-row items-center gap-3">
						{isClosedTemporarily && (
							<Text className="text-red-500 font-oswald">
								CLOSED TEMPORARILY
							</Text>
						)}
						{isOpenNow && <SvgXml xml={open} className="w-5 h-5" />}
						<Image source={{ uri: icon }} className="w-4 h-4" />
					</View>
				</View>
				{/* ADDRESS */}
				<Text>{address}</Text>
			</View>
		</Card>
	);
};

export default RestaurantInfo;
