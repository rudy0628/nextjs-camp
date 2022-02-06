import { Fragment, useState } from 'react';
import { render } from 'react-dom';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

import Message from '../../components/UI/flashMessage/Message';
import NewCampForm from '../../components/camps/NewCampForm';
import Spinner from '../../components/UI/spinner/Spinner';

const NewCamp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const addNewCampHandler = async camp => {
		setIsLoading(true);
		try {
			const response = await fetch('/api/camp', {
				method: 'POST',
				body: JSON.stringify(camp),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Add New Camp Failed');
			}

			const data = await response.json();
			await router.push('/');

			render(
				<Message text={'Add New Camp Success'} type="SUCCESS" />,
				document.querySelector('.flash-text')
			);
		} catch (e) {
			render(
				<Message text={e.message} type="FAIL" />,
				document.querySelector('.flash-text')
			);
		}
	};

	return (
		<Fragment>
			<Head>
				<title>New Camp</title>
				<meta
					name="description"
					content="Add New Camp properties, title、image、price、description、location"
				/>
			</Head>
			{isLoading && <Spinner />}
			{!isLoading && <NewCampForm onAddNewCamp={addNewCampHandler} />}
		</Fragment>
	);
};

export default NewCamp;
