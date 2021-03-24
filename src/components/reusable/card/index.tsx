import styled from 'styled-components';

/**
 * The default card component for the project
 */
const Card = styled.div`
	padding: 16px;
	display: grid;
	grid-template-columns: 100%;
	row-gap: 32px;
	background-color: ${({ theme }) => theme.colors.white.background};
	border-radius: 12px;
	color: ${({ theme }) => theme.colors.primary.main};
	max-width: 650px;
	&[data-fullwidth='true'] {
		max-width: 100%;
	}
`;

export default Card;
