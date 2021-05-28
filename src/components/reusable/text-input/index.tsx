import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
	position: relative;
	display: flex;
	flex-direction: column;
	margin: 8px 0px;
`;

const Input = styled.input`
	position: relative;
	border: 0;
	width: 100%;
	height: 100%;
	border-radius: 8px;
	padding: 4px 8px;
	font-size: inherit;
	border-bottom: 2px solid ${props => props.theme.colors.gray.main};
`;

const LabelText = styled.span`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	padding: 4px 8px;
	color: ${props => props.theme.colors.gray.main};
	pointer-events: none;

	${Input}:focus + & {
		color: transparent;
	}
`;

const TextArea = styled(Input).attrs({ as: `textarea` })``;

type TextInputProps = React.PropsWithoutRef<{
	/** The text that indicates the field's name */
	label: string;
	numberOfLines?: number;
	inputProps?: Omit<React.ComponentProps<'input'>, 'ref'>;
	labelProps?: Omit<React.ComponentProps<'span'>, 'ref'>;
	name?: string;
	type?: string;
	onChange?: (newValue: string) => void;
	inputRef?: React.RefObject<HTMLInputElement>;
	defaultValue?: string;
}> &
	Omit<React.ComponentPropsWithoutRef<'label'>, 'onChange' | 'defaultValue'>;

type TextInputComponent = React.FunctionComponent<TextInputProps>;

/**
 * This is the application's default text input component
 */
const TextInput: TextInputComponent = ({
	label,
	numberOfLines = 1,
	inputProps,
	labelProps,
	name,
	type,
	onChange = () => {},
	inputRef,
	defaultValue = ``,
	...props
}) => {
	const [value, setValue] = React.useState(defaultValue);

	function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
		const newValue = event.target.value;
		setValue(newValue);
		onChange(newValue);
	}

	return (
		<Label {...props}>
			{numberOfLines === 1 ? (
				<Input
					name={name}
					type={type}
					value={value}
					onInput={handleChangeInput}
					ref={inputRef}
					{...inputProps}
				/>
			) : (
				<TextArea
					name={name}
					type={type}
					value={value}
					ref={inputRef}
					onInput={handleChangeInput}
					{...inputProps}
				/>
			)}
			{value === `` && <LabelText {...labelProps}>{label}</LabelText>}
		</Label>
	);
};

export default TextInput;
