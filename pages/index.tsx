import { ButtonTag, Htag } from '../components';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import axios from 'axios';
import { Balance, Transactions, TransactionsData } from '../interfaces/payme.interface';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

function Home({ menu, firstCategory, balance, transactions }: HomeProps): JSX.Element {
	const { data: session, status } = useSession();
	return (
		<>
			{status === 'authenticated' ? session?.user?.email : <></>}
			{
				!session
					?
					<ButtonTag appearence='primary' onClick={() => signIn()}>Sign in</ButtonTag>
					:
					<>
						<Htag>{session?.user?.name}</Htag>
						{/* <Image
							alt={session?.user?.name ?? ''}
							src={session?.user?.image ?? ''}
							width={75}
							height={75}
							style={{
								borderRadius: '50%'
							}}
							priority={true}
						/> */}
						<Htag>{session?.user?.email}</Htag>
						<ButtonTag appearence='white' onClick={() => signOut()}>Sign out</ButtonTag>
					</>
			}
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	try {
		const { data: balance, status: balanceStatus, statusText: balanceStatusText } = await axios.get(process.env.PAYME_BALANCE + '');
		const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
		const transactions = res.data;

		if (balanceStatusText != 'OK') {
			return {
				notFound: true
			};
		}
		return {
			props: {
				balance,
				firstCategory,
				transactions
			}
		};
	} catch {
		return {
			notFound: true
		};
	};
};

interface HomeProps extends Record<string, unknown> {
	balance?: Balance;
	menu?: FirstLevelMenuItem[];
	firstCategory: number;
	transactions?: Transactions;
}