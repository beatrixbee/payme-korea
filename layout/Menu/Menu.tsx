import { MenuProps } from './Menu.props';
import styles from './Menu.module.css';
import cn from 'classnames';
import Credit from './icons/credit.svg';
import Cart from './icons/cart.svg';
import Growth from './icons/growth.svg';
import Activity from './icons/activity.svg';
import { Htag } from '../../components/Htag/Htag';

export const Menu = ({ className, ...props }: MenuProps): JSX.Element => {
	return (
		<div className={cn(className, styles.dashboard)} {...props}>
			<div className={styles.title}>Dashboards</div>
			<div className={styles.menuItemOuter}>
				<div className={styles.menuItemInner}>
					<Cart />
					Default
				</div>
			</div>
			<div className={styles.menuItemOuter}>
				<div className={styles.menuItemInner}>
					<Activity />
					Sales
				</div>
			</div>
			<div className={styles.menuItemOuter}>
				<div className={styles.menuItemInner}>
					<Growth />
					Analytics
				</div>
			</div>
		</div >

	)
}