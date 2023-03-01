import { MenuProps } from './Menu.props';
import styles from './Menu.module.css';
import cn from 'classnames';
import { MenuItem } from '../../components';
import Link from 'next/link';
import { dashboardMenu } from '../../helpers/helpers';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export const Menu = ({ className, ...props }: MenuProps): JSX.Element => {

	const { menu } = useContext(AppContext)

	return (
		<div>
			<div className={cn(className, styles.dashboard)} {...props}>
				<div className={styles.title}>Dashboards</div>
				{dashboardMenu.map(({ route, name, icon, id }) => (
					<div className={styles.menuItemOuter} key={id}>
						<Link href={`/${route}`}>
							<MenuItem>
								{icon}
								{name}
							</MenuItem>
						</Link>
					</div>
				))}
			</div>
		</div>

	)
}