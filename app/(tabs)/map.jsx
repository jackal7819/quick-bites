import MapView, { Marker } from 'react-native-maps';
import { Dimensions } from 'react-native';
import { restaurants } from '../../data'

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
				/>
			))}
		</MapView>
	);
};

export default MapScreen;
