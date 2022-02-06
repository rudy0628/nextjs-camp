import { useSpring, animated } from 'react-spring';

import Card from '../UI/Card/Card';
import classes from './CampItem.module.css';

const CampDetail = props => {
	const styles = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	return (
		<animated.div style={styles}>
			<Card className={classes['camp-item']}>
				<div className={classes['camp-item__img-box']}>
					<img src={props.image} alt={props.description} />
				</div>
				<div className={classes['camp-item__text-box']}>
					<h1 className={classes['camp-item__title']}>{props.title}</h1>
					<p className={classes['camp-item__location']}>{props.location}</p>
					<p className={classes['camp-item__price']}>
						${Number(props.price).toFixed(2)}
					</p>
					<p className={classes['camp-item__description']}>
						{props.description}
					</p>
					<button
						className={classes['camp-item__btn']}
						onClick={props.onShowModal}
					>
						Delete
					</button>
				</div>
			</Card>
		</animated.div>
	);
};

export default CampDetail;
