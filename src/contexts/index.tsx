import React from 'react';
import ModalProvider from './modal';

/** Place your React's context providers inside this component. They will automatically
 * be visible in your whole application. */
const Providers: React.FunctionComponent<React.PropsWithChildren<Record<string, never>>> = ({
	children,
}) => {
	return <ModalProvider>{children}</ModalProvider>;
};

export default Providers;
