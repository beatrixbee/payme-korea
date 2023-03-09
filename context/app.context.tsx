import { createContext, ReactNode, useState } from 'react';
import { dashboardMenu } from '../helpers/helpers';
import { DashboardCategory, FirstLevelMenuItem } from '../interfaces/menu.interface';
import { Balance } from '../interfaces/payme.interface';

export interface IAppContext {
	menu: FirstLevelMenuItem[];
	firstCategory: DashboardCategory;
	setMenu?: (newMenu: FirstLevelMenuItem[]) => void;
	// balance?: Balance;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: 0 });

export const AppContextProvider = ({ menu, firstCategory, children }: IAppContext & { children: ReactNode }): JSX.Element => {
	const [menuState, setMenuState] = useState<FirstLevelMenuItem[]>(dashboardMenu);
	const setMenu = (newMenu: FirstLevelMenuItem[]) => {
		setMenuState(newMenu);
	}
	return <AppContext.Provider value={{ menu: menuState, firstCategory: 0, setMenu }}>
		{children}
	</AppContext.Provider>
}