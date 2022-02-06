import React, { useState, Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import CampItem from './CampItem';
import Spinner from '../UI/spinner/Spinner';

const Camps = props => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const showDetailHandler = async id => {
		setIsLoading(true);
		await router.push(`/${id}`);
	};

	const styles = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	return (
		<Fragment>
			{isLoading && <Spinner />}
			{!isLoading && (
				<animated.div style={styles}>
					<ul>
						{props.camps.map(camp => (
							<CampItem
								id={camp.id}
								key={camp.id}
								title={camp.title}
								location={camp.location}
								price={camp.price}
								description={camp.description}
								image={camp.image}
								onShowDetail={showDetailHandler}
							/>
						))}
					</ul>
				</animated.div>
			)}
		</Fragment>
	);
};

export default Camps;
