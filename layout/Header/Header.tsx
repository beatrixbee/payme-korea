import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Bell from './bell.svg';
import Chat from './chat.svg';
import User from './user.svg';
import Search from './search.svg';
import Arrow from './arrow.svg'
import Link from 'next/link';
import { useState } from 'react';


export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [dropdownActive, setDropdownActive] = useState<boolean>(false)
	return (
		<header className={cn(className, styles.header)} {...props}>
			<div className={styles.search}>
				<em className="ni ni-search" />
				<input className={styles.input} placeholder='Search anything' />
			</div>
			<div className={styles.buttons}>
				<em className="ni ni-comments" />
				<em className="ni ni-bell" />
				<div className={styles.avatar} onClick={() => setDropdownActive(!dropdownActive)}>
					<User />
					<span>Anvarov Said</span>
					<em className="ni ni-chevron-down" />
				</div>
				<div className={cn(styles.avatarDropdown, {
					[styles.avatarDropdownIsActive]: dropdownActive
				})}>
					<div className={styles.avatarDropdownTop}>
						<User />
						Anvarov Said
					</div>
					<div className={styles.avatarDropdownInner}>
						<Link href='' className={styles.avatarDropdownInnerItem}>View Profile</Link>
						<Link href='' className={styles.avatarDropdownInnerItem}>Account Setting</Link>
						<Link href='' className={styles.avatarDropdownInnerItem}>Login Activity</Link>
						<Link href='' className={styles.avatarDropdownInnerItem}>Dark Mode</Link>
					</div>
					<div className={styles.avatarDropdownBottom}>
						<Link href='' className={styles.avatarDropdownInnerItem}>Sign out</Link>
					</div>
				</div>
			</div>
		</header>
	);
};