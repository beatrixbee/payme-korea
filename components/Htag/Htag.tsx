import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';


export const Htag = ({ tag, children, className, ...props }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn('h1', styles.h1)}>{children}</h1>;
		case 'h2':
			return <h2 className='h2'>{children}</h2>;
		default:
			return <></>;
	}
};