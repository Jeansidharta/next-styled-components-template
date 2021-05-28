import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

type AppContainerProps = React.PropsWithoutRef<{}>;
type AppContainerComponent = React.FunctionComponent<AppContainerProps>;

/** This component envelops the whole page. It's equivalent to the `src/pages/_app.tsx` file,
 * but you can declare `styled-components`'s components here. It's useful to add styles that
 * should be applied to the whole application, or setting up the page's container in a specific
 * way. */
const AppContainer: AppContainerComponent = ({ children }) => {
	return <Root>{children}</Root>;
};

export default AppContainer;
