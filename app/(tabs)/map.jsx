import MapView, { Marker, Callout } from 'react-native-maps';
import { Dimensions, Image, Platform, Pressable, Text, View } from 'react-native';
import { restaurants } from '../../data';
import { WebView } from 'react-native-webview';
const Screen = Dimensions.get('window');

const ASPECT_RATIO = Screen.width / Screen.height;
const LATITUDE_DELTA = 6;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const INITIAL_POSITION = {
	latitude: 28.1305,
	longitude: -81.4497,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
};

const MapScreen = () => {
	const ImageView = Platform.OS === 'android' ? WebView : Image;

	return (
		<MapView className="flex-1" initialRegion={INITIAL_POSITION} liteMode>
			{restaurants.map((restaurant) => (
				<Marker
					key={restaurant.id}
					coordinate={{
						latitude: restaurant.latitude,
						longitude: restaurant.longitude,
					}}
					title={restaurant.name}
				>
					<Callout>
						<View className="items-center p-1 rounded-xl">
							<ImageView
								source={{ uri: restaurant.photos[0] }}
								className="w-40 h-20 rounded-xl"
							/>
							<Text className="text-center uppercase font-oswald">
								{restaurant.name}
							</Text>
            </View>
					</Callout>
				</Marker>
			))}
		</MapView>
	);
};

export default MapScreen;
