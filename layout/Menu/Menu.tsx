import { MenuProps } from './Menu.props';
import styles from './Menu.module.css';
import cn from 'classnames';
import Credit from './icons/credit.svg';
import Cart from './icons/cart.svg';
import Activity from './icons/activity.svg';
import Growth from './icons/growth.svg';
import { MenuItem } from '../../components';

export const Menu = ({ className, ...props }: MenuProps): JSX.Element => {
	return (
		<div className={cn(className, styles.dashboard)} {...props}>
			<div className={styles.title}>Dashboards</div>
			<div className={styles.menuItemOuter}>
				<MenuItem active='true'>
					<Cart />
					Default
				</MenuItem>
			</div>
			<div className={styles.menuItemOuter}>
				<MenuItem>
					<Activity />
					Sales
				</MenuItem>
			</div>
			<div className={styles.menuItemOuter}>
				<MenuItem>
					<Growth />
					Analytics
				</MenuItem>
			</div>
		</div >

	)
}