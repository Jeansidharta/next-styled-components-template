import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

import NavLink from './nav-link';

const Root = styled.div`
	height: 10vh;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary.lighter};
	box-shadow: ${({ theme }) => theme.shadows.layout.large.soft.normal};
	display: flex;
	justify-content: space-between;
	padding: 8px 32px;
`;

const Logo = styled(Image).attrs(() => ({ layout: 'fill' }))`
	height: 100%;
	width: auto;
	cursor: pointer;
`;

const LinksContainer = styled.ul`
	padding: 0;
	margin: 0;
	align-items: center;
	display: flex;
`;

const Anchor = styled.a.attrs({ href: '#' })`
	max-width: 80px;
	position: relative;
	width: 100%;
	height: 100%;
`;

type NavbarProps = React.PropsWithoutRef<{}>;

type NavbarComponent = React.FunctionComponent<NavbarProps>;

const Navbar: NavbarComponent = () => {
	const linksContainerRef = React.useRef<HTMLUListElement>(null);

	const links = [
		{ idToFocus: 'about-us', text: 'About us' },
		{ idToFocus: 'plans', text: 'Plans' },
		{ idToFocus: 'team', text: 'Our team' },
		{ idToFocus: 'contact', text: 'Contact' },
	];

	return (
		<Root>
			<Link href='/home'>
				<Anchor>
					<Logo src="/images/logo.svg" />
				</Anchor>
			</Link>
			<LinksContainer ref={linksContainerRef}>
				{links.map(link => <NavLink
					idToFocus={link.idToFocus}
					children={link.text}
					key={link.text}
				/>)}
			</LinksContainer>
		</Root>
	);
}

export default Navbar;