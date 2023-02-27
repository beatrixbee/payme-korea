import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns'


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<div className={cn(styles.data)}> © {format(new Date(), 'yyyy')} Dashlight by Anvarov Said</div>
			<div className={styles.links}>
				<a href='#'>Terms</a>
				<a href='#'>Privacy</a>
				<a href='#'>Help</a>
			</div>
		</footer>
	);
};