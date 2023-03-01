import { AccordionProps } from './Accordion.props';
import styles from './Accordion.module.css';
import cn from 'classnames';
import Credit from './icons/credit.svg';
import Users from './icons/users.svg';
import Applications from './icons/applications.svg';
import Projects from './icons/projects.svg';
import { MenuItem } from '../../components';

export const Accordion = ({ className, ...props }: AccordionProps): JSX.Element => {
	return (
		<div className={cn(className, styles.dashboard)} {...props}>
			<div className={styles.title}>Applications</div>
			<div className={styles.menuItemOuter}>
				<MenuItem arrow='right'>
					<Projects />
					Projects
				</MenuItem>
			</div>
			<div className={styles.menuItemOuter}>
				<MenuItem arrow='right'>
					<Users />
					User Manage
				</MenuItem>
			</div>
			<div className={styles.menuItemOuter}>
				<MenuItem arrow='right'>
					<Credit />
					Orders
				</MenuItem>
			</div>
			<div className={styles.menuItemOuter}>
				<MenuItem arrow='right'>
					<Applications />
					Applications
				</MenuItem>
			</div>
		</div >

	)
}