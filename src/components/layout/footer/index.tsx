import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: ${props => props.theme.shadows.layout.large.strong.normal};
`;

type FooterProps = React.PropsWithoutRef<{}>;

type FooterComponent = React.FunctionComponent<FooterProps>;

const Footer: FooterComponent = () => {
	return (
		<Root>
			<p>Footer component</p>
		</Root>
	);
};

export default Footer;
