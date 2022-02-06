import FlashMessage from 'react-flash-message';
import classes from './Message.module.css';

const Message = props => {
	let style;
	if (props.type === 'SUCCESS') {
		style = `${classes.message} ${classes['message--success']}`;
	}

	if (props.type === 'FAIL') {
		style = `${classes.message} ${classes['message--error']}`;
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
