import { ButtonTag, Card, Htag, Ptag } from '../components';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { DashlightComponent } from '../page-components';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Balance } from '../interfaces/payme.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

function Default({ balance }: DashlightProps): JSX.Element {

	return (
		<DashlightComponent
			balance={balance}
		>

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
		return {
			props: {
				balance,
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
}