import { ButtonTag, Htag, Ptag } from '../components';
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import { dashboardMenu } from '../helpers/helpers';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import axios from 'axios';
import { Balance } from '../interfaces/payme.interface';
import { DashlightComponent } from '../page-components';

function Home({ menu, firstCategory, balance }: HomeProps): JSX.Element {
	return (
		<>
			<Htag tag='h1' >Hashimov Foziljon</Htag>
			<span className='h1'>Typography</span>
			<ButtonTag appearence='primary' className='dsa'>Reports</ButtonTag>
			<ButtonTag appearence='primary' arrow='right'>Reports</ButtonTag>
			<ButtonTag appearence='white'>Reports</ButtonTag>
			<ButtonTag appearence='white' arrow='right'>Reports</ButtonTag>
			<ButtonTag appearence='white' arrow='down'>Reports</ButtonTag>
			<Ptag>Some text default size</Ptag>
			<Ptag size='l'>Some text large size</Ptag>
			<Ptag size='m'>Some text large size</Ptag>
			<Ptag size='s'>Some text large size</Ptag>
			<DashlightComponent>
				{balance?.data.name}<br />
				{balance?.data.account}<br />
				{balance?.data.branch}<br />
				{balance?.data.code_currency}<br />
				{balance?.data.current_balance}<br />
			</DashlightComponent>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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

interface HomeProps extends Record<string, unknown> {
	balance?: Balance;
	menu?: FirstLevelMenuItem[];
	firstCategory: number;
}