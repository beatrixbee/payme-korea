import { DashlightComponentProps } from './DashlightComponent.props';
import cn from 'classnames';
import { ButtonTag, Card, Htag } from '../../components';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/app.context';
import { useRouter } from 'next/router';
import styles from './DashlightComponent.module.css';


export const DashlightComponent = ({ balance, children, className, ...props }: DashlightComponentProps): JSX.Element => {
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
				<Htag tag='h2' className={styles.titleText}>{dashlightHeader}</Htag>
				<ButtonTag appearence='white' arrow='right' className={styles.titleButton}>
					<em className="icon ni ni-calender-date"></em>
					<div className={styles.ButtonText}>Last 30 Days</div>
				</ButtonTag>
				<ButtonTag appearence='primary' className={styles.titleButton}>
					<em className="icon ni ni-reports-alt"></em>
					<div className={styles.ButtonText}>Reports</div>
				</ButtonTag>
			</div>
			<div className={styles.content}>
				<div className={styles.upperContent}>
					<Card>
						<Htag tag='h3'>Store Statistics</Htag>
						<div className={styles.cardData}>{balance?.data.account}</div>
					</Card>
					<Card>
						<Htag tag='h3'>Store Statistics</Htag>
						<div className={styles.cardData}>{balance?.data.branch}</div>
					</Card>
					<Card>
						<Htag tag='h3'>Store Statistics</Htag>
						<div className={styles.cardData}>{balance?.data.code_currency}</div>
					</Card>
					<Card>
						<Htag tag='h3'>Store Statistics</Htag>
						<div className={styles.cardData}>{balance?.data.current_balance}</div>
					</Card>
				</div>
				<div className={styles.bottomContent}>
					<Card className={styles.iconCard}>
						<Htag tag='h3'>Balance</Htag>
						<div className={styles.cardData}>
							<ul className={styles.cardDataList}>
								<li className={styles.cardDataListItem}>
									<div>
										<div className={styles.itemTitle}>Branch</div>
										<div className={styles.itemNumber}>{balance?.data.branch}</div>
									</div>
									<em className={cn(styles.firstIcon, 'ni ni-bag')}></em>
								</li>
								<li className={styles.cardDataListItem}>
									<div>
										<div className={styles.itemTitle}>Name</div>
										<div className={styles.itemNumber}>{balance?.data.name}</div>
									</div>
									<em className={cn(styles.secondIcon, 'ni ni-users')}></em>
								</li>
								<li className={styles.cardDataListItem}>
									<div>
										<div className={styles.itemTitle}>Account</div>
										<div className={styles.itemNumber}>{balance?.data.account}</div>
									</div>
									<em className={cn(styles.thirdIcon, 'ni ni-box')}></em>
								</li>
								<li className={styles.cardDataListItem}>
									<div>
										<div className={styles.itemTitle}>Code Currency</div>
										<div className={styles.itemNumber}>{balance?.data.code_currency}</div>
									</div>
									<em className={cn(styles.fourthIcon, 'ni ni-server')}></em>
								</li>
								<li className={styles.cardDataListItem}>
									<div>
										<div className={styles.itemTitle}>Current Balance</div>
										<div className={styles.itemNumber}>{balance?.data.current_balance}</div>
									</div>
									<em className={cn(styles.fifthIcon, 'ni ni-coin')}></em>
								</li>
							</ul>
						</div>
					</Card>
				</div>

			</div >

		</div >
	)
}