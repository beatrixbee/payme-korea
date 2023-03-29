import { MenuItemProps } from './MenuItem.props';
import styles from './MenuItem.module.css';
import cn from 'classnames';
import Arrow from './arrow.svg';

export const MenuItem = ({ active = 'false', arrow = 'none', children, className, ...props }: MenuItemProps): JSX.Element => {
	return (
		<div className={cn(className, styles.menuItem, {
			[styles.activeMenuItem]: active != 'false',
			[styles.isArrow]: arrow != 'none',
			[styles.isNoArrow]: arrow == 'none',
		})}
			{...props}
		>
			{children}
			{
				arrow != 'none' && <span className={styles.arrow}>
					<em className="icon ni ni-chevron-right" />
				</span>
			}
		</div >
	)
}