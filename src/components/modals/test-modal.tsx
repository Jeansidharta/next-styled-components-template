import React, { FC } from 'react';
import styled from 'styled-components';
import { useModal } from '../../contexts/modal';
import Button from '../reusable/button';
import Card from '../reusable/card';
import Select from '../reusable/select';

const Root = styled(Card)``;

const TestModal: FC<{}> = ({}) => {
	const { closeModal } = useModal();

	return (
		<Root>
			This is a TEST modal. Nothing to see here.
			<Select
				style={{ marginTop: 32 }}
				label="Batata"
				options={[
					'Select Option 1',
					'Select Option 2',
					'Select Option 3',
					'Select Option 4',
					'Select Option 5',
				]}
			/>
			<Button onClick={closeModal}>Close modal</Button>
		</Root>
	);
};

export default TestModal;
