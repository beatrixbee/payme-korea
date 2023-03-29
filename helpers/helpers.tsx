import { DashboardCategory, FirstLevelCategory, FirstLevelMenuItem, SecondLevelCategory, SecondLevelMenuItem } from '../interfaces/menu.interface';

export const dashboardMenu: FirstLevelMenuItem[] = [
	{ route: 'default', name: 'Default', icon: <em className="ni ni-cart-fill" />, id: DashboardCategory.Default },
	{ route: 'sales', name: 'Sales', icon: <em className="ni ni-activity-round-fill" />, id: DashboardCategory.Sales },
	{ route: 'analytics', name: 'Analytics', icon: <em className="ni ni-growth-fill" />, id: DashboardCategory.Analytics },
]

export const applicationsFirstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'projects', name: 'Projects', icon: <em className="icon ni ni-tile-thumb-fill" />, id: FirstLevelCategory.Projects },
	{ route: 'users', name: 'User Manage', icon: <em className="icon ni ni-users-fill" />, id: FirstLevelCategory.UserManage },
	{ route: 'orders', name: 'Orders', icon: <em className="icon ni ni-cc-alt2-fill" />, id: FirstLevelCategory.Order },
	{ route: 'applications', name: 'Applications', icon: <em className="icon ni ni-grid-alt-fill" />, id: FirstLevelCategory.Applications },
]

export const applicationsSecondLevelMenu: SecondLevelMenuItem[] = [
	{ route: 'projectCards', name: 'Project Cards', id: SecondLevelCategory.ProjectCards, parentId: FirstLevelCategory.Projects },
	{ route: 'projectList', name: 'Project List', id: SecondLevelCategory.ProjectList, parentId: FirstLevelCategory.Projects },
	{ route: 'userList', name: 'User List', id: SecondLevelCategory.UserList, parentId: FirstLevelCategory.UserManage },
	{ route: 'userDetail', name: 'User Detail', isNew: true, id: SecondLevelCategory.UserDetail, parentId: FirstLevelCategory.UserManage },
]