import FlashMessage from 'react-flash-message';

const Message = props => {
	let style;
	if (props.type === 'SUCCESS') {
		style = `message message--success`;
	}

	if (props.type === 'FAIL') {
		style = `message message--error`;
	}

	return (
		<FlashMessage duration={3000}>
			<div className={style}>
				<strong>{props.text}</strong>
			</div>
		</FlashMessage>
	);
};

export default Message;
