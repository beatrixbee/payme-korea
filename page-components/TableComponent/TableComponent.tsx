import { TableComponentProps } from './TableComponent.props';
import styles from './TableComponent.module.css'
import { ButtonTag, Card, Htag } from '../../components';
import { useState } from 'react';
import { paginate } from '../../helpers/helpers';
import Pagination from '../../components/Pagination/Pagination';
import cn from 'classnames';
import { useTable } from 'react-table';
import React from 'react';

const TableComponent = ({ transactions, tableHeader, className, ...props }: TableComponentProps): JSX.Element => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 15;

	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};

	if (!transactions) {
		return <div>Loading...</div>;
	}
	const paginatedPosts = paginate({ items: transactions, pageNumber: currentPage, pageSize });
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
					{/* <table>
						{paginatedPosts.map((item) => {
							return (
								<tr>{item.created_at}</tr>
							)
						})}
					</table> */}
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
export default TableComponent;
