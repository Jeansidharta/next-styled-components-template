import React from 'react';

/** Place your React's context providers inside this component. They will automatically
* be visible in your whole application. */
const Providers: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => {
	// Remove this exception when the first context is created.
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>
		{children}
	</>;
};

export default Providers;
