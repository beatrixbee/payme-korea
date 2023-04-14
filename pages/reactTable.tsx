import React, { useEffect, useMemo } from 'react';
import { Column } from 'react-table';
import { TransactionsTableData } from '../helpers/helpers';
import ReactTable from '../page-components/ReactTable/ReactTable';
import { Transactions, TransactionsData } from '../interfaces/payme.interface';
import axios from 'axios';
import { GetStaticProps } from 'next';
// Example columns
// const columns: Column<TransactionsTableData>[] = [
// 	{ Header: 'ID', accessor: 'id' },
// 	{ Header: 'Error_1', accessor: 'error_1' },
// 	{ Header: 'Error_2', accessor: 'error_2' },
// 	{ Header: 'Error_3', accessor: 'error_3' },
// ];

const MyPage: React.FC = ({ transactions }: TransactionsProps) => {

	const ID = ({ value }: { value: number }) => {
		// Loop through the array and create a badge-like component instead of a comma-separated string
		return (
			<span className='badge'>
				{value}
			</span>
		);
	};

	const columns: Column<TransactionsTableData>[] = useMemo(() => [
		{
			Header: 'ID',
			accessor: 'id',
			Cell: ({ cell: { value } }) => <ID value={value} />

		},
		{
			Header: 'Error_1',
			accessor: 'error_1'
		},
		{
			Header: 'ReceiptId',
			accessor: 'receiptId'
		},
		{
			Header: 'Error_3',
			accessor: 'error_3'
		},
	], []);


	return (
		<div>
			<h1>My Table</h1>
			<ReactTable data={transactions} columns={columns} />
		</div>
	);
};

export default MyPage;

export const getStaticProps: GetStaticProps<TransactionsProps> = async () => {
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

interface TransactionsProps extends Record<string, unknown> {
	transactions?: Transactions[];
}