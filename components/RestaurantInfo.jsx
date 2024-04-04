import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import Spacer from './Spacer';
import open from '../assets/images/open';
import star from '../assets/images/star';

const StyledCard = styled(Card)`
	background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const StyledTitle = styled.Text`
	color: ${({ theme }) => theme.colors.ui.primary};
	font-family: ${({ theme }) => theme.fonts.heading};
	font-size: ${({ theme }) => theme.fontSizes.body};
`;

const StyledAddress = styled.Text`
	font-family: ${({ theme }) => theme.fonts.body};
	font-size: ${({ theme }) => theme.fontSizes.caption};
`;

const StyledCover = styled(Card.Cover)`
	padding: ${({ theme }) => theme.space[3]};
	background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Info = styled.View`
	padding: ${({ theme }) => theme.space[3]};
`;

const Rating = styled.View`
	flex-direction: row;
`;

const IconsContainer = styled.View`
	flex-direction: row;
	align-items: center;
	padding-top: ${({ theme }) => theme.space[2]};
	padding-bottom: ${({ theme }) => theme.space[2]};
`;

const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

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
		<StyledCard elevation={5}>
			<StyledCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<StyledTitle>{name}</StyledTitle>
				<IconsContainer>
					<Rating>
						{ratingArray.map((_, index) => (
							<SvgXml
								xml={star}
								width={20}
								height={20}
								key={index}
							/>
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="label" style={{ color: 'red' }}>
								CLOSED TEMPORARILY
							</Text>
						)}
						<Spacer variant="left.large" />
						{isOpenNow && (
							<SvgXml xml={open} width={20} height={20} />
						)}
						<Spacer variant="left.large" />
						<Image
							style={{ width: 15, height: 15 }}
							source={{ uri: icon }}
						/>
					</SectionEnd>
				</IconsContainer>
				<StyledAddress>{address}</StyledAddress>
			</Info>
		</StyledCard>
	);
};

export default RestaurantInfo;
