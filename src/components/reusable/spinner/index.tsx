import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const Svg = styled.svg<{ size: number }>`
	${({ size = 20 }) => `
		height: ${size}px;
		width: ${size}px;
		viewBox: 0 0 ${size} ${size};
		x: 0;
		y: 0;
	`}
`;

const Circle = styled.circle<{
	color: string;
	size: number;
	strokeWidth: number;
	animation: ReturnType<typeof keyframes>;
}>`
	fill: transparent;
	stroke: ${({ color }) => color};
	stroke-width: ${({ strokeWidth }) => strokeWidth};
	stroke-linecap: round;
	stroke-dasharray: ${({ size }) => 3.14 * size};
	animation: ${({ animation }) => animation} 3000ms linear Infinite;
	transform-origin: 50% 50% 0;
`;

/**
 * This is a spinner component. It is often use to indicate to the user that a
 * server request is being made.
 */
const Spinner: FC<
	{
		/** The radius of the spinner in pixels. Default is 40. */
		size?: number;
		/** The width (thickness) of the spinner's outline. Default is 2. */
		strokeWidth?: number;
		/** The spinner's color. Default is black. */
		color?: string;
	} & Omit<React.ComponentProps<'svg'>, 'ref'>
> = ({ size = 20, strokeWidth = 2, color = `black`, ...props }) => {
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

	return (
		<Svg viewBox={`0 0 ${size} ${size}`} size={size} {...props}>
			<Circle
				strokeWidth={strokeWidth}
				animation={animation.current}
				cx={size / 2}
				cy={size / 2}
				r={(size - strokeWidth) / 2}
				size={size}
				color={color}
			/>
		</Svg>
	);
};

export default Spinner;
