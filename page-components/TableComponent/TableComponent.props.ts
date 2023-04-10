import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Transactions } from '../../interfaces/payme.interface';


export interface TableComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	transactions?: Transactions[];
}