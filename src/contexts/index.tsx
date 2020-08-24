import React from 'react';

/** Place your React's context providers inside this component. They will automatically
* be visible in your whole application. */
const Providers: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => {
	return <>
		{children}
	</>
}

export default  Providers;