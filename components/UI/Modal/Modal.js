import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card/Card';
import classes from './Modal.module.css';

const Backdrop = props => {
	return <div className={classes.backdrop} onClick={props.onToggleModal} />;
};

const ModalOverlay = props => {
	const deleteCampHandler = () => {
		props.onToggleModal();
		props.onDeleteCamp();
	};

	return (
		<Card className={classes.modal}>
			<header className={classes['modal__header']}>
				<h2>{props.title}</h2>
			</header>
			<main className={classes['modal__main']}>
				<p>{props.main}</p>
			</main>
			<footer className={classes['modal__footer']}>
				<button
					className={classes['modal__btn--check']}
					onClick={props.onToggleModal}
				>
					{props.type === 'delete' ? 'Cancel' : 'Ok'}
				</button>
				{props.type === 'delete' && (
					<button
						className={classes['modal__btn--delete']}
						onClick={deleteCampHandler}
					>
						Delete
					</button>
				)}
			</footer>
		</Card>
	);
};

const Modal = props => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onToggleModal={props.onToggleModal} />,
				document.querySelector('.backdrop')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					main={props.main}
					type={props.type}
					onDeleteCamp={props.onDeleteCamp}
					onToggleModal={props.onToggleModal}
				/>,
				document.querySelector('.overlay')
			)}
		</Fragment>
	);
};

export default Modal;
