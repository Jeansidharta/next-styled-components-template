/** *************************************************************************
 *                         What is this file?                               *
 *                                                                          *
 * This file contains all imports to all images, icons and etc... It has a  *
 * base component that all images should share, and has to organize all     *
 * images in a single export default object.                                *
 *                                                                          *
 ************************************************************************** */

import React from 'react';
import type { FlattenSimpleInterpolation } from 'styled-components';
import styled from 'styled-components';
import ImageURLs from './image-urls';

const hasWebpCounterpartRegex = /\.(png|jpe?g)$/;

const Picture = styled.picture<{ css?: FlattenSimpleInterpolation }>`
	width: 100%;
	height: 100%;
	${({ css }) => css || ``};
`;

const Image = styled.img<{ fit: string }>`
	object-fit: ${({ fit }) => fit};
	width: inherit;
	height: inherit;
	user-drag: none;
	user-select: none;
`;

type BaseImageProps = React.PropsWithChildren<{
	src: string;
	alt: string;
	css?: FlattenSimpleInterpolation;
	fit?:
		| 'contain'
		| 'cover'
		| 'fill'
		| 'inherit'
		| 'initial'
		| 'none'
		| 'revert'
		| 'scale-down'
		| 'unset';
}> &
	Omit<React.ComponentProps<'picture'>, 'ref'>;

/**
 * This component is the base of all images in the App. It will apply some default styling,
 * and will automaticaly handle webp sources.
 */
const BaseImage = React.forwardRef<HTMLPictureElement, BaseImageProps>(
	({ src, alt, fit = `contain`, ...props }, ref) => {
		const webpSrc = src.match(hasWebpCounterpartRegex)
			? src.replace(hasWebpCounterpartRegex, `.webp`)
			: ``;

		return (
			<Picture {...props} ref={ref}>
				{webpSrc && <source srcSet={webpSrc} type="image/webp" />}
				<Image src={src} alt={alt} fit={fit} />
			</Picture>
		);
	},
);

const Images = {
	/** Here's an image import example. Just copy and paste it with the correct import path. */
	main: styled(BaseImage).attrs(({ alt }) => ({
		src: ImageURLs.logo,
		alt: alt || `My Company Logo`,
	}))``,
};

export default Images;
