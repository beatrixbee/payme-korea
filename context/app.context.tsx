import { createContext, ReactNode, useState } from 'react';
import { dashboardMenu } from '../helpers/helpers';

export interface IAppContext {
	menu: typeof dashboardMenu[];
}

export const AppContext = createContext<IAppContext>({ menu: [] });

export const AppContextProvider = ({ menu, children }: IAppContext & { children: ReactNode }): JSX.Element => {
	const [menuState, setMenuState] = useState<typeof dashboardMenu[]>(menu);

	return <AppContext.Provider value={{ menu: menuState }}>
		{children}
	</AppContext.Provider>
}