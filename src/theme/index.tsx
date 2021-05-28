/** *************************************************************************
 *                         What is this file?                               *
 *                                                                          *
 * This file is responsible for declaring the styled-components theme       *
 * variable. It also provides the typings for the theme                     *
 *                                                                          *
 ************************************************************************** */

import type { DefaultTheme } from 'styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultThemeColors } from './colors';
import { DefaultThemeShadows } from './shadows';
import { DefaultThemeMediaQueries } from './media-queries';
import { DefaultThemeFonts } from './fonts';
import { DefaultThemeZIndex } from './z-index';

// This will "merge" `styled-component`'s DefaultTheme type with our custom theme type.
declare module 'styled-components' {
	export interface DefaultTheme {
		/** Color-related stuff, for pages with primary and secondary colors. */
		colors: DefaultThemeColors;

		/** Font-related stuff. Things like font-family, font-weight or font-size. */
		font: DefaultThemeFonts;
		shadows: DefaultThemeShadows;
		zIndex: DefaultThemeZIndex;

		/** For standardizing media-queries. It will mostly be used to contain
		 * screen-related media queries, but should also hold queries like `@print`
		 * or `@anything-else` */
		mediaQueries: DefaultThemeMediaQueries;
	}
}

const theme: DefaultTheme = {
	colors: DefaultThemeColors,
	font: DefaultThemeFonts,
	shadows: DefaultThemeShadows,
	zIndex: DefaultThemeZIndex,
	mediaQueries: DefaultThemeMediaQueries,
};

function FilledThemeProvider({ ...props }) {
	return <ThemeProvider theme={theme} {...props} />;
}

export default FilledThemeProvider;
