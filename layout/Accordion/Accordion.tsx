import { AccordionProps } from './Accordion.props';
import styles from './Accordion.module.css';
import cn from 'classnames';
import New from './new.svg';
import { MenuItem } from '../../components';
import Link from 'next/link';
import { applicationsFirstLevelMenu, applicationsSecondLevelMenu } from '../../helpers/helpers';

export const Accordion = ({ className, ...props }: AccordionProps): JSX.Element => {
	const buildFirstLevelMenu = () => {
		return (
			<>
				{applicationsFirstLevelMenu.map(({ route, name, icon, id }) => (
					<div className={styles.menuItemOuter} key={id}>
						<>
							<MenuItem arrow='right'>
								{icon}
								{name}
							</MenuItem>
							{buildSecondLevelMenu(route, id)}
						</>
					</div>
				))}
			</>
		)
	}

	const buildSecondLevelMenu = (firstLevelRoute: string, firstLevelId: number) => {
		return (
			<>
				{applicationsSecondLevelMenu.map(({ route, name, isNew, id, parentId }) => (
					firstLevelId == parentId ?
						<Link href={`/${firstLevelRoute}/${route}`} className={cn(styles.secondLevelMenu, {
							[styles.secondLevelActive]: false,
							[styles.isNew]: isNew
						})}>
							{name}
							{isNew && <New />}
						</Link>
						: <></>
				))}
			</>
		)
	}

	return (
		<div className={cn(className, styles.dashboard)} {...props}>
			<>
				<div className={styles.title}>Applications</div>
				{buildFirstLevelMenu()}
			</>
		</div>
	)
}