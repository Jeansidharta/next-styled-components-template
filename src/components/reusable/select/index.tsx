import React, { FC } from 'react';
import styled from 'styled-components';
import { useEffectUpdate } from '../../../libs/hooks/use-effect-update';
import { useDocumentBodyEvent } from '../../../libs/hooks/use-global-event';
import { useLayoutEffectUpdate } from '../../../libs/hooks/use-layout-effect-update';
import { NormalizedOption, normalizeOption, Option, withContainer } from './option';

const Root = styled.div<{ disabled: boolean }>`
	position: relative;
	font-size: inherit;
	font-weight: inherit;
	color: inherit;
	display: block;
	text-align: left;
	cursor: pointer;
	min-width: 100px;
	padding: 0px 8px;
	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 4px;
	background-color: transparent;
	${props => (props.disabled ? `background-color: rgba(0, 0, 0, 0.2); cursor: no-drop;` : ``)}
`;

const LabelContainer = styled.label`
	pointer-events: none;
`;

const InvisibleLabel = styled(LabelContainer).attrs({ children: 'i' })`
	visibility: hidden;
`;

const OptionElem = styled.button`
	font-size: inherit;
	font-weight: inherit;
	color: inherit;
	cursor: pointer;
	border: 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.4);
	padding: 0;
	background-color: transparent;
`;

const OptionsContainer = styled.div`
	border: 1px solid black;
	position: absolute;
	top: 100%;
	left: -1px;
	display: flex;
	flex-direction: column;
	width: max-content;
	overflow-y: auto;
	background-color: white;
	z-index: 1;
`;

const Select: FC<
	{
		options: Option[];
		onChange?: (newValue: string | null) => void;
		widthMode?: 'largest-option' | 'min-width';
		label?: string;
		initialValue?: string | null;
		disabled?: boolean;
		maxOptionsContainerHeight?: number;
	} & Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'>
> = ({
	options,
	onChange = () => {},
	label,
	widthMode = 'largest-option',
	initialValue,
	disabled = false,
	maxOptionsContainerHeight = Infinity,
	...props
}) => {
	const normalizedOptions = React.useMemo(() => options.map(normalizeOption), [options]);

	const [selectedOption, setSelectedOption] = React.useState<NormalizedOption | null>(() => {
		if (initialValue === undefined || initialValue === null) return null;
		const initialOption = normalizedOptions.find(option => option.value === initialValue);
		if (!initialOption) return null;
		return initialOption;
	});
	const [isSelectOpen, setIsSelectOpen] = React.useState(true);
	const [hasOptionsWidth, setHasOptionsWidth] = React.useState(false);
	const maxOptionWidth = React.useRef(0);
	const optionsContainerRef = React.useRef<HTMLDivElement | null>(null);
	const rootRef = React.useRef<HTMLDivElement | null>(null);

	React.useLayoutEffect(() => {
		if (!isSelectOpen) return;
		const optionsContainer = optionsContainerRef.current!;
		let { bottom, right, height: containerHeight } = optionsContainer.getBoundingClientRect();
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		const maxHeight = Math.min(windowHeight, maxOptionsContainerHeight);

		// Checks if container is larger than the user's screen
		if (containerHeight > maxHeight) {
			optionsContainer.style.maxHeight = maxHeight + 'px';
			bottom -= containerHeight - maxHeight;
		}

		// Checks if the options would disappear on the bottom of the user's screen
		const heightDifference = bottom - windowHeight;
		if (heightDifference > 0) {
			optionsContainer.style.top = `calc(100% - ${heightDifference}px)`;
		}

		// Checks if the options would disappear on the edge of the user's screen
		const widthDifference = right - windowWidth;
		if (widthDifference > 0) {
			optionsContainer.style.left = `${-widthDifference - 1}px`;
		}

		return () => {
			optionsContainer.style.left = '';
			optionsContainer.style.top = '';
			optionsContainer.style.maxHeight = '';
		};
	}, [isSelectOpen]);

	useEffectUpdate(() => {
		if (selectedOption) onChange(selectedOption.value);
		else onChange(null);
	}, [selectedOption]);

	useDocumentBodyEvent(
		'click',
		event => {
			if (!isSelectOpen) return;
			const target = event.target as HTMLElement | null;
			if (!target || rootRef.current!.contains(target)) return;
			setIsSelectOpen(false);
		},
		[isSelectOpen],
	);

	useLayoutEffectUpdate(() => {
		setHasOptionsWidth(false);
		setSelectedOption(null);
	}, [normalizedOptions]);

	React.useLayoutEffect(() => {
		if (hasOptionsWidth) return;
		optionsContainerRef.current!.style.display = 'flex';
		maxOptionWidth.current = optionsContainerRef.current!.getBoundingClientRect().width;
		optionsContainerRef.current!.style.display = calculateOptionsContainerStyle().display;
		setIsSelectOpen(false);
		if (widthMode === 'largest-option') {
			rootRef.current!.style.width = `${maxOptionWidth.current}px`;
		}
		setHasOptionsWidth(true);
	}, [hasOptionsWidth]);

	const calculateOptionsContainerStyle = () => ({
		display: isSelectOpen ? 'flex' : 'none',
	});

	function toggleSelect() {
		if (isSelectOpen) setIsSelectOpen(false);
		else setIsSelectOpen(true);
	}

	function handleRootKeyDown(event: React.KeyboardEvent) {
		const key = event.key.toLowerCase();
		if ((event.target === rootRef.current && key === 'enter') || key === ' ') {
			toggleSelect();
		} else if (key === 'escape') {
			setIsSelectOpen(false);
		}
	}

	function handleOptionClick(option: NormalizedOption) {
		setSelectedOption(option);
		setIsSelectOpen(false);
	}

	function resolveLabelElement() {
		if (selectedOption) {
			return <LabelContainer>{selectedOption.labelText}</LabelContainer>;
		} else if (label) {
			return <LabelContainer>{label}</LabelContainer>;
		} else {
			return <InvisibleLabel />;
		}
	}

	return (
		<Root
			onClick={toggleSelect}
			onKeyDown={handleRootKeyDown}
			ref={rootRef}
			tabIndex={0}
			disabled={disabled}
			{...props}
		>
			{resolveLabelElement()}
			<OptionsContainer style={calculateOptionsContainerStyle()} ref={optionsContainerRef}>
				{normalizedOptions.map(option => (
					<OptionElem key={option.id} onClick={() => handleOptionClick(option)}>
						{withContainer(hasOptionsWidth ? option.optionText : option.labelText)}
					</OptionElem>
				))}
			</OptionsContainer>
		</Root>
	);
};

export default Select;
