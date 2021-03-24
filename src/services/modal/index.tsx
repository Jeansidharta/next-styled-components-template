import React from 'react';
import styled from 'styled-components';
import { useModal } from '../../contexts/modal';

const Backdrop = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 64px;
`;

const ElementContainer = styled.div`
	max-height: 100%;
	max-width: 100%;
`;

type ModalComponent = React.FunctionComponent;

const Modal: ModalComponent = () => {
	const { element, options, closeModal } = useModal();

	function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
		event.stopPropagation();
		if (options.backdropClickClose) closeModal();
	}

	function handleElementContainerClick(event: React.MouseEvent<HTMLDivElement>) {
		event.stopPropagation();
	}

	if (!element) return null;

	return (
		<Backdrop onClick={handleBackdropClick}>
			<ElementContainer onClick={handleElementContainerClick}>{element}</ElementContainer>
		</Backdrop>
	);
};

export default Modal;