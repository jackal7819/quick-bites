import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const StyledCard = styled(Card)`
	background-color: #fff;
`;

const StyledTitle = styled(Card.Title)`
	padding: 20px;
`;

const StyledCover = styled(Card.Cover)`
	padding: 20px;
	background-color: #fff;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
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
		<StyledCard elevation={5}>
			<StyledCover key={name} source={{ uri: photos[0] }} />
			<StyledTitle title={name} subtitle={address} />
		</StyledCard>
	);
};

export default RestaurantInfoCard;
