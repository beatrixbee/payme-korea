import { ButtonTagProps } from './ButtonTag.props';
import styles from './ButtonTag.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';


export const ButtonTag = ({ appearence, arrow = 'none', children, className, ...props }: ButtonTagProps): JSX.Element => {
	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appearence == 'primary',
			[styles.white]: appearence == 'white',
		})}
			{...props}
		>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down',
				[styles.right]: arrow == 'right'
			})}>
				<ArrowIcon />
			</span>}
		</button >
	)
};