import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { format } from 'date-fns'


export const Card = ({ children, className, ...props }: CardProps): JSX.Element => {
	return (
		<div className={cn(styles.card, className)}
			{...props}>
			{children}
		</div>
	);
};