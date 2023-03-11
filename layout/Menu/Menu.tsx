import { MenuProps } from './Menu.props';
import styles from './Menu.module.css';
import cn from 'classnames';
import { MenuItem } from '../../components';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app.context';
import { useRouter } from 'next/router';

export const Menu = ({ className, ...props }: MenuProps): JSX.Element => {

	const { menu, firstCategory, setMenu } = useContext(AppContext);

	const router = useRouter();

	return (
		<div className={cn(className, styles.dashboard)} {...props}>
			<div className={styles.title}>Dashboards</div>
			{menu && menu.map(({ route, name, icon, id, isOpened }) => {
				if (route == router.asPath.split('/')[1]) {
					isOpened = true
				}
				return (
					<div className={styles.menuItemOuter} key={id}>
						<Link href={`/${route}`}>
							{isOpened ?
								<MenuItem active='true'>
									{icon}
									{name}
								</MenuItem> :
								<MenuItem>
									{icon}
									{name}
								</MenuItem>}

						</Link>
					</div>)
			})}
		</div>
	)
}