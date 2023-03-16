import { AccordionProps } from './Accordion.props';
import styles from './Accordion.module.css';
import cn from 'classnames';
import New from './new.svg';
import { MenuItem } from '../../components';
import Link from 'next/link';
import { applicationsSecondLevelMenu } from '../../helpers/helpers';
import { Fragment, useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../../context/app.context';

export const Accordion = ({ className, ...props }: AccordionProps): JSX.Element => {
	const { accordion, setAccordion } = useContext(AppContext);
	const router = useRouter();
	const openAccordionItem = (id: number) => {
		setAccordion && setAccordion(accordion.map(a => {
			if (a.isOpened == true) {
				a.isOpened = false
			}
			if (a.id == id) {
				a.isOpened = true;
			}
			return a
		}))
	}
	const buildFirstLevelMenu = () => {
		return (
			<>
				{accordion.map(({ route, name, icon, id, isOpened }) => {
					return (
						<div className={styles.menuItemOuter} key={id}>
							<MenuItem arrow='right' onClick={() => openAccordionItem(id)}>
								{icon}
								{name}
							</MenuItem>
							<div className={cn(styles.firstLevelBlock, {
								[styles.firstLevelBlockOpened]: isOpened || applicationsSecondLevelMenu.map(sl => { return `/${route}/${sl.route}` }).includes(router.asPath)
							})}>
								{buildSecondLevelMenu(route, id)}
							</div>
						</div>)
				})}
			</>
		)
	}

	const buildSecondLevelMenu = (firstLevelRoute: string, firstLevelId: number) => {
		return (
			<>
				{applicationsSecondLevelMenu.map(({ route, name, isNew, id, parentId }) => (
					firstLevelId == parentId ?
						<Link
							href={`/${firstLevelRoute}/${route}`}
							key={id}
							className={cn(styles.secondLevelMenu, {
								[styles.secondLevelActive]: `/${firstLevelRoute}/${route}` == router.asPath,
								[styles.isNew]: isNew
							})}>
							{name}
							{isNew && <New />}
						</Link>
						: <Fragment key={id}></Fragment>
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