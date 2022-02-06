import Card from '../UI/Card/Card';
import classes from './CampItem.module.css';

const CampItem = props => {
	const showDetailHandler = () => {
		props.onShowDetail(props.id);
	};

	return (
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
				<button
					className={classes['camp-item__btn']}
					onClick={showDetailHandler}
				>
					View Details
				</button>
			</div>
		</Card>
	);
};

export default CampItem;
