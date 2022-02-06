import { FaRegTimesCircle } from 'react-icons/fa';
import Card from '../Card/Card';

import classes from './ErrorMessage.module.css';

const ErrorMessage = props => {
	return (
		<Card className={classes['error-message']}>
			<FaRegTimesCircle className={classes['error-message__icon']} />
			<p>{props.message}</p>
		</Card>
	);
};

export default ErrorMessage;
