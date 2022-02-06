import { useState, Fragment } from 'react';
import { render } from 'react-dom';
import { useRouter } from 'next/router';
import Head from 'next/head';

import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Modal from '../../components/UI/Modal/Modal';
import Message from '../../components/UI/flashMessage/Message';
import Spinner from '../../components/UI/spinner/Spinner';
import CampDetail from '../../components/camps/CampDetail';

const CampDetailPage = props => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [modalIsShow, setModalIsShow] = useState(false);

	const deleteHandler = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('/api/camp', {
				method: 'DELETE',
				body: JSON.stringify(props.campData.id),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Delete Camp Failed');
				return;
			}

			const data = await response.json();

			await router.push('/');

			render(
				<Message text={'Delete Camp Success'} type="SUCCESS" />,
				document.querySelector('.flash-text')
			);
		} catch (e) {
			setIsLoading(false);
			render(
				<Message text={e.message} type="FAIL" />,
				document.querySelector('.flash-text')
			);
		}
	};

	const toggleModalHandler = () => {
		setModalIsShow(prevState => !prevState);
	};

	return (
		<Fragment>
			<Head>
				<title>{props.campData.title}</title>
				<meta name="description" content={props.campData.description} />
			</Head>
			{modalIsShow && (
				<Modal
					onToggleModal={toggleModalHandler}
					onDeleteCamp={deleteHandler}
					title="Delete Camp"
					main="Are you sure to delete this camp ? "
					type="delete"
				/>
			)}
			{isLoading && <Spinner />}
			{!isLoading && props.status === 'SUCCESS' && (
				<CampDetail
					title={props.campData.title}
					location={props.campData.location}
					price={props.campData.price}
					description={props.campData.description}
					image={props.campData.image}
					onShowModal={toggleModalHandler}
				/>
			)}
			{!isLoading && props.status === 'FAIL' && (
				<ErrorMessage message="Load Camp Detail Failed" />
			)}
		</Fragment>
	);
};

export const getStaticPaths = async () => {
	const response = await fetch('http://127.0.0.1:3000/api/camp-id', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	return {
		fallback: false,
		paths: data.camps.map(camp => ({
			params: {
				campId: camp._id.toString(),
			},
		})),
	};
};

export const getStaticProps = async context => {
	try {
		const campId = context.params.campId;

		const response = await fetch(
			`http://127.0.0.1:3000/api/camp?id=${campId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (!response.ok) {
			throw new Error();
			return;
		}

		const data = await response.json();

		return {
			props: {
				campData: {
					id: data.camp._id.toString(),
					title: data.camp.title,
					location: data.camp.location,
					price: data.camp.price,
					description: data.camp.description,
					image: data.camp.image,
				},
				status: 'SUCCESS',
			},
		};
	} catch (e) {
		return {
			props: {
				campData: null,
				status: 'FAIL',
			},
		};
	}
};

export default CampDetailPage;
