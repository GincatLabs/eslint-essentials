import React from 'react';

interface MyComponentProps {
	tag: string;
}

export const MyComponent: React.FC<MyComponentProps> = (props) => {
	const [state, setState] = React.useState(0);

	const handleClick: React.MouseEventHandler = () => {
		setState((prevState) => prevState + 1);
	};

	return (
		<button
			onClick={handleClick}
			type='button'
		>
			{props.tag}:{state}
		</button>
	);
};
