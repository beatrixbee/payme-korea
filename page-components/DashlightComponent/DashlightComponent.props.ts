import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface DashlightComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode
}