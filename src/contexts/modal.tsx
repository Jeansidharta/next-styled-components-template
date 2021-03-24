import React from 'react';

type ModalContext = {
	element: React.ReactNode | null;
	options: ModalOptions;
	openModal: (element: React.ReactNode | null, newOptions?: ModalOptions) => void;
	closeModal: () => void;
};

type ModalOptions = {
	backdropClickClose: boolean;
	backdropCloseOnPressingESC: boolean;
};

const defaultModalOptions: ModalOptions = {
	backdropClickClose: true,
	backdropCloseOnPressingESC: true,
};

const context = React.createContext<ModalContext>((null as unknown) as ModalContext);

const ModalProvider = ({ ...props }) => {
	const [element, setElement] = React.useState<React.ReactNode | null>(null);
	const [options, setOptions] = React.useState<ModalOptions>(defaultModalOptions);

	function closeModal() {
		setElement(null);
	}

	function openModal(newElement: React.ReactNode, newOptions: ModalOptions = defaultModalOptions) {
		setElement(newElement);
		setOptions(newOptions);
	}

	return (
		<context.Provider
			value={React.useMemo(
				() => ({
					element,
					options,
					openModal,
					closeModal,
				}),
				[element, options],
			)}
			{...props}
		/>
	);
};

const useModal = () => {
	return React.useContext(context);
};

export { useModal };
export default ModalProvider;
