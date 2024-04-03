import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

import RestaurantInfo from '../components/RestaurantInfo';

const StyledSafeAreaView = styled.SafeAreaView`
	flex: 1;
`;

const RestaurantList = styled.View`
	flex: 1;
	padding: ${({ theme }) => theme.space[3]};
`;

const SearchContainer = styled.View`
	padding: ${({ theme }) => theme.space[3]};
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
				<RestaurantInfo />
			</RestaurantList>
		</StyledSafeAreaView>
	);
};

export default Restaurants;
