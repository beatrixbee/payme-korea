import React from 'react';
import { withLayout } from '../layout/Layout';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { Transactions, TransactionsData } from '../interfaces/payme.interface';
import TableComponent from '../page-components/TableComponent/TableComponent';

function Sales({ transactions }: SalesProps): JSX.Element {
	const { data: session, status } = useSession({ required: true });
	return (
		<>
			<TableComponent transactions={transactions} />
		</>
	);
}

export default withLayout(Sales);


export const getStaticProps: GetStaticProps<SalesProps> = async () => {
	try {
		const res = await axios.get(process.env.PAYME_TRANSACTIONS + '')
		const transactionsData: TransactionsData = res.data;
		const transStatustext = res.statusText;
		const transactions: Transactions[] = transactionsData.data
		if (transStatustext != 'OK') {
			return {
				notFound: true
			};
		}

		if (!transactionsData.success) {
			return {
				notFound: true
			};
		} else {
			return {
				props: {
					transactions
				}
			};
		}
	} catch {
		return {
			notFound: true
		};
	};
};

interface SalesProps extends Record<string, unknown> {
	transactions?: Transactions[];
}