// Framework
import React from 'react';
import Head from 'next/head';

// Misc
import FilledThemeProvider from '../theme';
import Providers from '../contexts';
import ImageURLs from '../images';
import AppContainer from '../containers/_app';
import Services from '../services';

type MyAppProps = React.PropsWithoutRef<{
	// The following rule is being ignored because this type is not important and
	// Is very hard to describe
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Component: any,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	pageProps: any,
}>;

type MyAppComponent = React.FunctionComponent<MyAppProps>;

const MyApp: MyAppComponent = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				{/* Global styling */}
				<style>{`
					body, html, #__next {
						height: 100%;
						margin: 0;
					}
					* {
						box-sizing: border-box;
					}
				`}
				</style>

				{/* Favicon related stuff */}
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />

				{/* These meta tags are related to OpenGraph, which allows for better webpage cards. */}
				{/* TODO - put real content here */}
				<meta property='og:title' content='My page title' />
				<meta property='og:site-name' content='My page site name' />
				<meta property='og:description' content='My page description' />
				<meta property='og:image' content={`${ImageURLs.logoPng}`} />
				{/* <meta property='og:url' content={deployedUrl + '/'} /> */}
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
