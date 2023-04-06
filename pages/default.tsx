import { ButtonTag, Card, Htag, Ptag } from '../components';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { DashlightComponent } from '../page-components';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Balance, BalanceMoney } from '../interfaces/payme.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

function Default({ balance, balanceMoney }: DashlightProps): JSX.Element {
	const { data: session, status } = useSession({ required: true });

	return (
		<DashlightComponent
			balance={balance}
			balanceMoney={balanceMoney}
		>
			<Link href="/">Index</Link>
		</DashlightComponent>
	);
}

export default withLayout(Default);

export const getStaticProps: GetStaticProps<DashlightProps> = async () => {
	const firstCategory = 0;
	try {
		const { data: balance, status, statusText } = await axios.get(process.env.PAYME_BALANCE + '');
		if (statusText != 'OK') {
			return {
				notFound: true
			};
		}
		const { data: balanceMoney, status: balanceMoneyStatus, statusText: balanceMoneyStatusText } = await axios.get(process.env.PAYME_BALANCE_MONEY + '');
		if (balanceMoneyStatusText != 'OK') {
			return {
				notFound: true
			};
		}
		return {
			props: {
				balance,
				balanceMoney,
				firstCategory,
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface DashlightProps extends Record<string, unknown> {
	balance?: Balance;
	balanceMoney?: BalanceMoney;
}