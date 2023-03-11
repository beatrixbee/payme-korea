import { createContext, ReactNode, useState } from 'react';
import { applicationsFirstLevelMenu, dashboardMenu } from '../helpers/helpers';
import { DashboardCategory, FirstLevelMenuItem } from '../interfaces/menu.interface';
import { Balance } from '../interfaces/payme.interface';

export interface IAppContext {
	menu: FirstLevelMenuItem[];
	firstCategory: DashboardCategory;
	setMenu?: (newMenu: FirstLevelMenuItem[]) => void;
	//Accordion is menu accordion in Sidebar
	accordion: FirstLevelMenuItem[];
	setAccordion?: (newAccordion: FirstLevelMenuItem[]) => void;
	// balance?: Balance;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: 0, accordion: [] });

export const AppContextProvider = ({ menu, firstCategory, children }: IAppContext & { children: ReactNode }): JSX.Element => {
	const [menuState, setMenuState] = useState<FirstLevelMenuItem[]>(dashboardMenu);
	const [accordionState, setAccordionState] = useState<FirstLevelMenuItem[]>(applicationsFirstLevelMenu);
	const setMenu = (newMenu: FirstLevelMenuItem[]) => {
		setMenuState(newMenu);
	}
	const setAccordion = (newAccordion: FirstLevelMenuItem[]) => {
		setAccordionState(newAccordion);
	}
	return <AppContext.Provider value={{ menu: menuState, firstCategory: 0, setMenu, accordion: accordionState, setAccordion }}>
		{children}
	</AppContext.Provider>
}