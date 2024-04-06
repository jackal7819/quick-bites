import styled from 'styled-components/native';

const sizeVariant = {
	small: 1,
	medium: 2,
	large: 3,
};

const positionVariant = {
	top: 'margin-top',
	bottom: 'margin-bottom',
	left: 'margin-left',
	right: 'margin-right',
};

const getVariant = (position, size, theme) => {
	const sizeIndex = sizeVariant[size];
	const property = positionVariant[position];
	const value = theme.space[sizeIndex];
	return `${property}: ${value}`;
};

const Spacer = styled.View`
	${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
	position: 'top',
	size: 'small',
};

export default Spacer;
