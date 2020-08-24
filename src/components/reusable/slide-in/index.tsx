import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	position: relative;
`;

type SlideInProps = React.PropsWithoutRef<{
	duration?: number,
	offset?: number,
	direction: 'up' | 'down' | 'left' | 'right',
}>;

type SlideInComponent = React.FunctionComponent<SlideInProps>;

const SlideIn: SlideInComponent = ({ duration = 2000, direction, offset = 100, children }) => {
	const rootRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const { style } = rootRef.current!;
		(style as any)[direction] = '0px';
		style.opacity = '1';
	}, []);

	return (
		<Root ref={rootRef} style={{ transition: `${duration}ms`, [direction]: offset + 'px', opacity: 0 }}>
			{children}
		</Root>
	);
}

export default SlideIn;