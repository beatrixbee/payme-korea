import { DashlightComponentProps } from './DashlightComponent.props';
import cn from 'classnames';
import { ButtonTag, Htag } from '../../components';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/app.context';
import { useRouter } from 'next/router';
import styles from './DashlightComponent.module.css';


export const DashlightComponent = ({ children, className }: DashlightComponentProps): JSX.Element => {
	const { menu } = useContext(AppContext);
	const router = useRouter();
	const [dashlightHeader, setDashlightHeader] = useState<string>('');
	useEffect(() => {
		const currentMenuItem = menu.find((m) =>
			('/' + m.route).includes(router.asPath)
		);

		if (currentMenuItem) {
			setDashlightHeader(currentMenuItem.name);
		}
	}, [menu, router.asPath]);
	return (
		<div className={cn(className, styles.dashlight)}>
			<div className={styles.title}>
				<Htag tag='h2'>{dashlightHeader}</Htag>
				<ButtonTag appearence='white' arrow='right'>Reports</ButtonTag>
				<ButtonTag appearence='primary'>Reports</ButtonTag>
				<span className="icon ni ni-upload" /></div>
			{children}
		</div>
	)
}