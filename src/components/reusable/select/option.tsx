import React from 'react';
import styled from 'styled-components';

type OptionWithTextVariation = {
	labelText: React.ReactNode;
	optionText: React.ReactNode;
	value: string;
	id?: string;
};
type OptionNormal = {
	text: React.ReactNode;
	value: string;
	id?: string;
};

const DefaultOptionContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 4px 8px;
`;

export type Option = OptionWithTextVariation | OptionNormal | string;

export type NormalizedOption = {
	value: string;
	labelText: React.ReactNode;
	optionText: React.ReactNode;
	id: string;
};

const isOptionWithTextVariation = (option: Option): option is OptionWithTextVariation =>
	typeof (option as any).labelText !== `undefined` ||
	typeof (option as any).optionText !== 'undefined';

export function withContainer(text: string | React.ReactNode) {
	if (React.isValidElement(text)) return text;
	else return <DefaultOptionContainer>{text}</DefaultOptionContainer>;
}

export function normalizeOption(option: Option) {
	if (typeof option === `string`) {
		return {
			value: option,
			labelText: option,
			optionText: option,
			id: option,
		};
	} else if (isOptionWithTextVariation(option)) {
		return {
			id: option.id || option.value,
			labelText: option.labelText,
			optionText: option.optionText,
			value: option.value,
		};
	} else {
		return {
			value: option.value,
			labelText: option.text,
			optionText: option.text,
			id: option.id || option.value,
		};
	}
}
