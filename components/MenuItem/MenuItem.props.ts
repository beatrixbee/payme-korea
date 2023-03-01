import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface MenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active?: 'false' | 'true';
	arrow?: 'right' | 'down' | 'none';
	children: ReactNode;
}