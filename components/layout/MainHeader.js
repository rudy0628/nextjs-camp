import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './MainHeader.module.css';

const MainHeader = () => {
	const router = useRouter();
	const pathname = router.pathname;

	return (
		<header className={classes.header}>
			<h1 className={classes.banner}>Nextjs-camp</h1>
			<nav className={classes.nav}>
				<ul className={classes['nav__list']}>
					<li className={classes['nav__item']}>
						<Link href="/" passHref>
							<button
								className={`${classes['nav__link']} ${
									pathname === '/' ? `${classes['active']}` : ''
								}`}
							>
								All Camp
							</button>
						</Link>
					</li>
					<li className={classes['nav__item']}>
						<Link href="/new-camp" passHref>
							<button
								className={`${classes['nav__link']} ${
									pathname === '/new-camp' ? `${classes['active']}` : ''
								}`}
							>
								New Camp
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
