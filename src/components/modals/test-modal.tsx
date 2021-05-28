import React from 'react';
import styled from 'styled-components';
import { useModal } from '../../contexts/modal';
import Button from '../reusable/button';
import Card from '../reusable/card';

const Root = styled(Card)``;

type TestModalComponent = React.FunctionComponent;

const TestModal: TestModalComponent = ({}) => {
	const { closeModal } = useModal();

	return (
		<Root>
			This is a TEST modal. Nothing to see here.
			<Button onClick={closeModal}>Close modal</Button>
		</Root>
	);
};

export default TestModal;
