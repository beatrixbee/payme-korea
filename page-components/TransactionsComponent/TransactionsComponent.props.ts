import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Transactions } from '../../interfaces/payme.interface';


export interface TransactionsComponent extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tableHeader?: string;
	transactions?: Transactions[];
}