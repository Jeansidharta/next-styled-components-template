import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

type AppContainerProps = React.PropsWithoutRef<{}>;
type AppContainerComponent = React.FunctionComponent<AppContainerProps>;

/** This component envelops the whole page. It's equivalent to the `src/pages/_app.tsx` file,
* but you can declare `styled-components`'s components here. */
const AppContainer: AppContainerComponent = ({ children }) => {
	return (
		<Root>
			{children}
		</Root>
	);
}

export default AppContainer;