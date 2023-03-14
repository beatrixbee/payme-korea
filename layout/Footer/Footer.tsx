import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns'
import Link from 'next/link';


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<div className={cn(styles.data)}> © {format(new Date(), 'yyyy')} Dashlight by Anvarov Said</div>
			<div className={styles.links}>
				<Link href='#'>Terms</Link>
				<Link href='#'>Privacy</Link>
				<Link href='#'>Help</Link>
			</div>
		</footer>
	);
};