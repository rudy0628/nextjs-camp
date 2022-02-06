import React from 'react';
import classes from './Input.module.css';

const Input = (props, ref) => {
	const inputClasses = props.hasError
		? `${classes.input} ${classes.error}`
		: `${classes.input}`;

	return (
		<div className={inputClasses}>
			<label>{props.id}</label>
			<input
				type={props.type}
				id={props.id}
				onChange={props.onChange}
				onBlur={props.onBlur}
				value={props.value}
			/>
			{props.hasError && <p className={classes['error-text']}>Invalid Input</p>}
		</div>
	);
};

export default Input;
