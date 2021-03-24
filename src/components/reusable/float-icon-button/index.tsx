import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	border-radius: 100%;
	cursor: pointer;
	box-shadow: ${props => props.theme.shadows.button.small.normal};
	transition: 200ms;
	outline: none;
	border: 0;
	:hover,
	:focus {
		box-shadow: ${props => props.theme.shadows.button.small.hover};
		transform: scale(1.1);
	}
	:active {
		box-shadow: ${props => props.theme.shadows.button.small.active};
		transform: scale(0.9);
	}
`;

type FloatIconButtonProps = React.PropsWithoutRef<{
	imageElem: React.ReactNode;
}> &
	React.ComponentProps<'button'>;

type FloatIconButtonComponent = React.FunctionComponent<FloatIconButtonProps>;

/**
 * This is more of a visual component. It will render the `imageElem` prop on it's center,
 * with some shadow around it. It's supposed to be a simple icon.
 */
const FloatIconButton: FloatIconButtonComponent = ({ imageElem, ref, ...props }) => {
	return <Root {...props}>{imageElem}</Root>;
};

export default FloatIconButton;
