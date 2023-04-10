import { TableComponentProps } from './TableComponent.props';
import styles from './Pagination.module.css'
import { Card } from '../../components';
import { useState } from 'react';
import { paginate } from '../../helpers/helpers';
import Pagination from '../../components/Pagination/Pagination';

const TableComponent = ({ transactions }: TableComponentProps): JSX.Element => {
	console.log(transactions)
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};
	if (!transactions) {
		return <div>Loading...</div>;
	}
	const paginatedPosts = paginate({ items: transactions, pageNumber: currentPage, pageSize });
	return (
		<div>
			<Card>
				{paginatedPosts.map((item) => {
					return <p key={item.id}>{item.id}</p>;
				})}
				<Pagination
					items={transactions?.length ?? 0} // 100
					currentPage={currentPage} // 1
					pageSize={pageSize} // 10
					onPageChange={onPageChange}
				/></Card>
		</div>
	);
};
export default TableComponent;