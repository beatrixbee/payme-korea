import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Column } from 'react-table';
import { TransactionsTableData } from '../../helpers/helpers';


export interface ReactTableProps<T extends object> extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: T[];
	columns: Column<T>[];
}