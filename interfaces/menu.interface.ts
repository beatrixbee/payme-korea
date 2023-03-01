export enum DashboardCategory {
	Default,
	Sales,
	Analytics
}

export enum FirstLevelCategory {
	Projects,
	UserManage,
	Order,
	Applications
}

export enum SecondLevelCategory {
	ProjectCards,
	ProjectList,
	UserList,
	UserDetail,
	UserProfile,
	OrderList,
	Messages,
	Inbox,
	FileManager,
	Calendar
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: FirstLevelCategory | DashboardCategory;
}

export interface SecondLevelMenuItem {
	route: string;
	name: string;
	isNew?: true | false;
	id: SecondLevelCategory;
	parentId: FirstLevelCategory;
}