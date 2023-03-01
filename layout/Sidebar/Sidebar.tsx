import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import { Accordion } from '../Accordion/Accordion';


export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)}
			{...props}>
			<Menu />
			<Accordion />
		</div>
	);
};