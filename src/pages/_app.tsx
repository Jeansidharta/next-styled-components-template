// Framework
import React from 'react';
import Head from 'next/head';

// Misc
import FilledThemeProvider from '../theme';
import Providers from '../contexts';
import ImageURLs from '../images/image-urls';
import AppContainer from '../containers/_app';
import Services from '../services';
import { deployedURLHome } from '../constants/deployed-url';
import { supportedLanguages } from '../constants/supported-languages';

type MyAppProps = React.PropsWithoutRef<{
	Component: any;
	pageProps: any;
}>;

type MyAppComponent = React.FunctionComponent<MyAppProps>;

const MyApp: MyAppComponent = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				{/* Favicon related stuff */}
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />

				{/* These meta tags are related to OpenGraph, which allows for better webpage cards. */}
				{/* For more information, visit https://ogp.me/ */}
				{/* TODO - put real content here */}
				<meta property="og:title" content="My page title" />
				<meta property="og:site_name" content="My page site name" />
				<meta property="og:description" content="My page description" />
				<meta property="og:locale" content={supportedLanguages[0].replaceAll('-', '_')} />
				{supportedLanguages.slice(1).map(language => (
					<meta property="og:locale:alternate" content={language.replaceAll('-', '_')} />
				))}
				<meta property="og:locale:alternate" content={supportedLanguages[0]} />
				<meta property="og:image" content={`${ImageURLs.logoPng}`} />
				<meta property="og:url" content={deployedURLHome} />
			</Head>

			<FilledThemeProvider>
				<Providers>
					<AppContainer>
						<Services />
						<Component {...pageProps} />
					</AppContainer>
				</Providers>
			</FilledThemeProvider>
		</>
	);
};

export default MyApp;
