import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';


export const Htag = ({ tag, children, className, ...props }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn('h1', styles.h1, className)}>{children}</h1>;
		case 'h2':
			return <h2 className={cn('h2', styles.h2, className)}>{children}</h2>;
		case 'h3':
			return <h3 className={cn('h3', styles.h3, className)}>{children}</h3>;
		default:
			return <h4 className={cn('h4', styles.h4, className)}>{children}</h4>;
	}
};