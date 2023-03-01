import Cart from './icons/cart.svg';
import Activity from './icons/activity.svg';
import Growth from './icons/growth.svg';
import Credit from './icons/credit.svg';
import Users from './icons/users.svg';
import Applications from './icons/applications.svg';
import Projects from './icons/projects.svg';
import { DashboardCategory, FirstLevelCategory, FirstLevelMenuItem, SecondLevelCategory, SecondLevelMenuItem } from '../interfaces/menu.interface';

export const dashboardMenu: FirstLevelMenuItem[] = [
	{ route: 'default', name: 'Default', icon: <Cart />, id: DashboardCategory.Default },
	{ route: 'sales', name: 'Sales', icon: <Activity />, id: DashboardCategory.Sales },
	{ route: 'analytics', name: 'Analytics', icon: <Growth />, id: DashboardCategory.Analytics },
]

export const applicationsFirstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'projects', name: 'Projects', icon: <Projects />, id: FirstLevelCategory.Projects },
	{ route: 'users', name: 'User Manage', icon: <Users />, id: FirstLevelCategory.UserManage },
	{ route: 'orders', name: 'Orders', icon: <Credit />, id: FirstLevelCategory.Order },
	{ route: 'applications', name: 'Applications', icon: <Applications />, id: FirstLevelCategory.Applications },
]

export const applicationsSecondLevelMenu: SecondLevelMenuItem[] = [
	{ route: 'projectCards', name: 'Project Cards', id: SecondLevelCategory.ProjectCards, parentId: FirstLevelCategory.Projects },
	{ route: 'projectList', name: 'Project List', id: SecondLevelCategory.ProjectList, parentId: FirstLevelCategory.Projects },
	{ route: 'userList', name: 'User List', id: SecondLevelCategory.UserList, parentId: FirstLevelCategory.UserManage },
	{ route: 'userDetail', name: 'User Detail', isNew: true, id: SecondLevelCategory.UserDetail, parentId: FirstLevelCategory.UserManage },
]