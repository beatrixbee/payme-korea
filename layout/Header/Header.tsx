import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Bell from './bell.svg';
import Chat from './chat.svg';
import User from './user.svg';
import Search from './search.svg';
import Arrow from './arrow.svg'
import Link from 'next/link';


export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(className, styles.header)} {...props}>
			<div className={styles.search}>
				<Search />
				<input className={styles.input} placeholder='Search anything' />
			</div>
			<div className={styles.buttons}>
				<Bell />
				<Chat />
				<a className={styles.avatar}>
					<User />
					Anvarov Said
					<Arrow />
				</a>
				<div className={styles.avatarDropdown}>
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