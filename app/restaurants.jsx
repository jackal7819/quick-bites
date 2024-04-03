import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

import RestaurantInfoCard from '../components/RestaurantInfoCard';

const StyledSafeAreaView = styled.SafeAreaView`
	flex: 1;
`;

const RestaurantList = styled.View`
	flex: 1;
	padding: 16px;
	background-color: #0000ff;
`;

const SearchContainer = styled.View`
	padding: 16px;
	background-color: #fff;
`;

const Restaurants = () => {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<StyledSafeAreaView>
			<SearchContainer>
				<Searchbar
					placeholder="Search"
					onChangeText={setSearchQuery}
					value={searchQuery}
				/>
			</SearchContainer>
			<RestaurantList>
				<RestaurantInfoCard />
			</RestaurantList>
		</StyledSafeAreaView>
	);
};

export default Restaurants;
