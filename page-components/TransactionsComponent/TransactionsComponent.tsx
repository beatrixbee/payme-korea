import { TransactionsComponent } from './TransactionsComponent.props';
import styles from './TransactionsComponent.module.css'
import { ButtonTag, Card, Htag } from '../../components';
import { useMemo, useState } from 'react';
import { TransactionsTableData, paginate } from '../../helpers/helpers';
import Pagination from '../../components/Pagination/Pagination';
import cn from 'classnames';
import { Column, useTable } from 'react-table';
import React from 'react';
import ReactTable from '../ReactTable/ReactTable';

const TransactionsComponent = ({ transactions, tableHeader, className, ...props }: TransactionsComponent): JSX.Element => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 15;

	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};

	if (!transactions) {
		return <div>Loading...</div>;
	}
	const paginatedPosts = paginate({ items: transactions, pageNumber: currentPage, pageSize });

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
		<div className={cn(className, styles.tableblock)} {...props}>
			<div className={styles.title}>
				<Htag tag='h2' className={styles.titleText}>{tableHeader}</Htag>
				<ButtonTag appearence='white' arrow='right' className={styles.titleButton}>
					<em className="icon ni ni-calender-date"></em>
					<div className={styles.ButtonText}>Last 30 Days</div>
				</ButtonTag>
				<ButtonTag appearence='primary' className={styles.titleButton}>
					<em className="icon ni ni-reports-alt"></em>
					<div className={styles.ButtonText}>Reports</div>
				</ButtonTag>
			</div>
			<Card className={styles.content}>
				<div className={styles.tableHeader}>
					<div className={styles.headerContent}>
						<div className={styles.dropdown}>
							Dropdown
							<ButtonTag appearence='white'>Apply</ButtonTag>
						</div>
						<div className={styles.search}>
							<div onClick={() => { console.log('Hello') }} className={styles.button}><em className="icon ni ni-search"></em></div>
						</div>
						<div className={styles.filter}>
							<div onClick={() => { console.log('Hello') }} className={styles.button}><em className="icon ni ni-filter-alt" /></div>
							<div onClick={() => { console.log('Hello') }} className={styles.button}><em className="icon ni ni-setting" /></div>
						</div>
					</div>
				</div>
				<div className={styles.tableContent}>
					<ReactTable data={transactions} columns={columns} />
				</div>
				<div className={styles.tableFooter}>
					<Pagination
						items={transactions?.length ?? 0} // 100
						currentPage={currentPage} // 1
						pageSize={pageSize} // 10
						onPageChange={onPageChange}
					/>
				</div>
			</Card >

		</div >
	);
};
export default TransactionsComponent;
