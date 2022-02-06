import { useSpring, animated } from 'react-spring';
import useInput from '../../hooks/use-input';

import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import classes from './NewCampForm.module.css';

const isNotEmpty = value => value.trim() !== '';
const isNumber = value =>
	typeof Number(value) === 'number' &&
	value.trim() !== '' &&
	Number(value) !== NaN;

const NewCampForm = props => {
	const {
		value: titleValue,
		hasError: titleHasError,
		isValid: titleIsValid,
		valueChangeHandler: titleChangeHandler,
		inputBlurHandler: titleBlurChangeHandler,
		reset: titleReset,
	} = useInput(isNotEmpty);

	const {
		value: locationValue,
		hasError: locationHasError,
		isValid: locationIsValid,
		valueChangeHandler: locationChangeHandler,
		inputBlurHandler: locationBlurChangeHandler,
		reset: locationReset,
	} = useInput(isNotEmpty);

	const {
		value: priceValue,
		hasError: priceHasError,
		isValid: priceIsValid,
		valueChangeHandler: priceChangeHandler,
		inputBlurHandler: priceBlurChangeHandler,
		reset: priceReset,
	} = useInput(isNumber);

	const {
		value: descriptionValue,
		hasError: descriptionHasError,
		isValid: descriptionIsValid,
		valueChangeHandler: descriptionChangeHandler,
		inputBlurHandler: descriptionBlurChangeHandler,
		reset: descriptionReset,
	} = useInput(isNotEmpty);

	const {
		value: imageValue,
		hasError: imageHasError,
		isValid: imageIsValid,
		valueChangeHandler: imageChangeHandler,
		inputBlurHandler: imageBlurChangeHandler,
		reset: imageReset,
	} = useInput(isNotEmpty);

	const formIsValid =
		titleIsValid &&
		locationIsValid &&
		priceIsValid &&
		descriptionIsValid &&
		imageIsValid;

	const submitHandler = e => {
		e.preventDefault();

		if (!formIsValid) return;

		const camp = {
			title: titleValue,
			location: locationValue,
			price: priceValue,
			description: descriptionValue,
			image: imageValue,
		};

		props.onAddNewCamp(camp);

		titleReset();
		locationReset();
		priceReset();
		descriptionReset();
		imageReset();
	};

	const styles = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	return (
		<animated.div style={styles}>
			<Card className={classes.form}>
				<form onSubmit={submitHandler}>
					<Input
						type="text"
						id="title"
						value={titleValue}
						onChange={titleChangeHandler}
						onBlur={titleBlurChangeHandler}
						hasError={titleHasError}
					/>
					<Input
						type="text"
						id="location"
						value={locationValue}
						onChange={locationChangeHandler}
						onBlur={locationBlurChangeHandler}
						hasError={locationHasError}
					/>
					<Input
						type="number"
						id="price"
						value={priceValue}
						onChange={priceChangeHandler}
						onBlur={priceBlurChangeHandler}
						hasError={priceHasError}
					/>
					<Input
						type="text"
						id="description"
						value={descriptionValue}
						onChange={descriptionChangeHandler}
						onBlur={descriptionBlurChangeHandler}
						hasError={descriptionHasError}
					/>
					<Input
						type="text"
						id="image"
						value={imageValue}
						onChange={imageChangeHandler}
						onBlur={imageBlurChangeHandler}
						hasError={imageHasError}
					/>
					<button disabled={!formIsValid}>Submit</button>
				</form>
			</Card>
		</animated.div>
	);
};

export default NewCampForm;
