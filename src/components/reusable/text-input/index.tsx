import React from 'react';
import styled from 'styled-components';

const Root = styled.label`
	display: flex;
	flex-direction: column;
	margin: 8px 0px;
`;

const Input = styled.input`
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
`;

type TextInputProps = React.PropsWithoutRef<{
	/** The text that indicates the field's name */
	label: string,
	numberOfLines?: number,
}> & React.ComponentProps<'label'>;

type TextInputComponent = React.FunctionComponent<TextInputProps>;

/**
* This is the application's default text input component
*/
const TextInput: TextInputComponent = ({ label, ref, numberOfLines = 1, ...props }) => {
	return (
		<Root {...props}>
			{label}
			{ numberOfLines === 1
				? <Input />
				: <TextArea />
			}
		</Root>
	);
}

export default TextInput;