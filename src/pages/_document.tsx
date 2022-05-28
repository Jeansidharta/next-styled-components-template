import React from 'react';
import type { DocumentContext } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { supportedLanguages } from '../constants/supported-languages';

/**
 * Fetches the page's global styles, that will be directly injected into the HTML.
 * This CSS file was imported like this to prevent a chaining dependency when first
 * downloading the web page.
 */
export function getExtraCSS() {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const fs = require(`fs`);

	const toastifyCSS = fs.readFileSync('node_modules/react-toastify/dist/ReactToastify.min.css', {
		encoding: 'utf8',
	});

	// The file containing the global styles.
	const fontText = fs.readFileSync(`src/global-css.css`, { encoding: `utf8` });

	// The CSS file is not minified. This is to remove all unnecessary whitespaces and comments
	// So the client won't have to download crap. This maaaay break things, be careful.
	const commentsAndWhitespacesRegex = /\s|(\/\*[^*]*\*+([^/*][^*]*\*+)*\/)/g;
	return fontText.replace(commentsAndWhitespacesRegex, ``) + toastifyCSS;
}

export default class MyDocument extends Document {
	public static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			// Fetch global CSS styles
			const extraCss = getExtraCSS();
			return {
				...initialProps,
				styles: [
					<style dangerouslySetInnerHTML={{ __html: extraCss }} />,
					initialProps.styles,
					sheet.getStyleElement(),
				],
			};
		} finally {
			sheet.seal();
		}
	}

	public render() {
		return (
			// The `og` prefix is to allow for OpenGraph tools to read info from the site
			<Html lang={supportedLanguages[0]} prefix="og: http://ogp.me/ns#">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
