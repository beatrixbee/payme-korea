import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Balance } from '../../interfaces/payme.interface';

export interface DashlightComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	balance?: Balance;
}