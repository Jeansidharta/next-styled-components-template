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
	label: string,
	numberOfLines?: number,
}> & React.ComponentProps<'label'>;

type TextInputComponent = React.FunctionComponent<TextInputProps>;

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