import React from 'react';
import styled, { keyframes } from 'styled-components';

const SVG = styled.svg<{ size: number }>`
	${({ size = 24 }) => `
		height: ${size}px;
		width: ${size}px;
		viewBox: 0 0 ${size} ${size};
		x: 0;
		y: 0;
	`}
`;

const Circle = styled.circle<{
	color: string,
	size: number,
	strokeWidth: number,
	animation: ReturnType<typeof keyframes>
}>`
	fill: transparent;
	stroke: ${({ color }) => color};
	stroke-width: ${({ strokeWidth }) => strokeWidth};
	stroke-linecap: round;
	stroke-dasharray: ${({ size }) => 3.14 * size};
	animation: ${({ animation }) => animation} 3000ms linear Infinite;
	transform-origin: 50% 50% 0;
`;

type SpinnerProps = React.PropsWithRef<{
	/** The size of the spinner */
	size?: number,
	/** The width of the spinner's line */
	strokeWidth?: number,
	/** The spinner's color */
	color?: string,
}> & React.ComponentProps<'svg'>;

type SpinnerComponent = React.FunctionComponent<SpinnerProps>;

/** This is a spinner component. It is often use to indicate to the user that a
request is being made. */
const Spinner: SpinnerComponent = ({
	size = 40,
	strokeWidth = 2,
	color = 'black',
	ref,
	...props
}) => {
	const animation = React.useRef(keyframes`
		0% {
			stroke-dashoffset: ${0.66 * size};
			transform: rotate(0deg);
		} 50% {
			stroke-dashoffset: ${3.14 * size};
			transform: rotate(720deg);
		} 100% {
			stroke-dashoffset: ${0.66 * size};
			transform: rotate(1080deg);
		}
	`);

	return <SVG viewBox={`0 0 ${size} ${size}`} size={size} {...props}>
		<Circle
			strokeWidth={strokeWidth}
			animation={animation.current}
			cx={size / 2}
			cy={size / 2}
			r={(size - strokeWidth) / 2}
			size={size}
			color={color}
		/>
	</SVG>
}

export default Spinner;