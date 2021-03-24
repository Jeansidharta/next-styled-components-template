import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	position: relative;
`;

type SlideInProps = React.PropsWithoutRef<{
	/** The animation duration. */
	duration?: number;
	/** The offset that the component will move when sliding. */
	offset?: number;
	/** The direction the animation will occur. */
	direction: 'up' | 'down' | 'left' | 'right';
}>;

type SlideInComponent = React.FunctionComponent<SlideInProps>;

/**
 * This component will be transparent on it's first render, and will slowly slide
 * in and become opaque. It's an animation componente.
 */
const SlideIn: SlideInComponent = ({ duration = 2000, direction, offset = 100, children }) => {
	const rootRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const { style } = rootRef.current!;
		(style as any)[direction] = `0px`;
		style.opacity = `1`;
	}, []);

	return (
		<Root
			ref={rootRef}
			style={{
				transition: `${duration}ms`,
				[direction]: `${offset}px`,
				opacity: 0,
			}}
		>
			{children}
		</Root>
	);
};

export default SlideIn;
