import React from 'react';
import styled from 'styled-components';

const Root = styled.li`
	list-style: none;
`;

const Anchor = styled.a`
	color: black;
	text-decoration: none;
	font-size: ${props => props.theme.font.size.large};
	transition-duration: 200ms;
	transition-property: background-color color;
	outline: none;
	color: ${props => props.theme.colors.primary.main};
	:hover,
	:focus {
		background-color: ${props => props.theme.colors.primary.main};
		color: white;
	}
	margin: 0 8px;
	padding: 8px 12px;
	border-radius: 8px;
`;

type NavLinkProps = React.PropsWithChildren<{
	/** The ID of the document object to scroll to */
	idToFocus: string;
}> &
	React.ComponentProps<'li'>;

type NavLinkComponent = React.FunctionComponent<NavLinkProps>;

const NavLink: NavLinkComponent = ({ idToFocus, children, ref, onClick, ...props }) => {
	return (
		<Root onClick={onClick} {...props}>
			<Anchor href="#">{children}</Anchor>
		</Root>
	);
};

export default NavLink;
