import React, { useState, useEffect, Fragment } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import Spinner from '../components/UI/spinner/Spinner';
import ErrorMessage from '../components/UI/ErrorMessage/ErrorMessage';
import Camps from '../components/camps/Camps';

const HomePage = props => {
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const start = () => {
			setIsLoading(true);
		};
		const end = () => {
			setIsLoading(false);
		};

		Router.events.on('routeChangeStart', start);
		Router.events.on('routeChangeComplete', end);
		Router.events.on('routeChangeError', end);

		return () => {
			Router.events.off('routeChangeStart', start);
			Router.events.off('routeChangeComplete', end);
			Router.events.off('routeChangeError', end);
		};
	}, []);

	return (
		<Fragment>
			<Head>
				<title>All Camp</title>
				<meta
					name="description"
					content="All camp in here you can view detail, or see how much it is"
				/>
			</Head>
			{isLoading && <Spinner />}
			{!isLoading && props.camps.length !== 0 && <Camps camps={props.camps} />}
			{!isLoading &&
				!props.camps.length &&
				props.loaded.status === 'SUCCESS' && (
					<p className="centered">No Any Camp</p>
				)}
			{!isLoading && props.loaded.status === 'FAIL' && (
				<ErrorMessage message="Load Camps Failed" />
			)}
		</Fragment>
	);
};

export const getServerSideProps = async () => {
	try {
		const response = await fetch('http://127.0.0.1:3000/api/all-camp', {
			method: 'GET',
		});

		if (!response.ok) {
			throw new Error();
			return;
		}

		const data = await response.json();
		return {
			props: {
				camps: data.camps.map(camp => ({
					id: camp._id.toString(),
					title: camp.title,
					location: camp.location,
					price: camp.price,
					description: camp.description,
					image: camp.image,
				})),
				loaded: {
					status: 'SUCCESS',
				},
			},
		};
	} catch (e) {
		return {
			props: {
				camps: [],
				loaded: {
					status: 'FAIL',
				},
			},
		};
	}
};

export default HomePage;
