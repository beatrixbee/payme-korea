import Link from 'next/link';
import React from 'react';
import { ButtonTag, Htag } from '../../components';
import { Footer } from '../../layout/Footer/Footer';
import styles from './LoginComponent.module.css';
import { LoginComponentProps } from './LoginComponent.props';
import Image from 'next/image';
import logoPic from './logo.png';
import logoDarkPic from './logo-dark.png';
import cn from 'classnames';


function LoginComponent({ }: LoginComponentProps): JSX.Element {
	// const { data: session, status } = useSession({ required: true });

	return (
		<div className={styles.wrapper}>
			<div className={styles.loginContent}>
				<div className={styles.loginBlock}>
					<div className={styles.logo}>
						<Link href={'/'}>
							<Image
								src={logoDarkPic}
								alt={'logo'}
							/>
						</Link>
					</div>
					<div className={styles.formContent}>
						<div className={styles.titleContent}>
							<Htag className={styles.title}>Sign-In</Htag>
							<span className={styles.titleBottomSpan}>Access the CryptoLite panel using your email and passcode.</span>
						</div>
						<form action="" className={styles.form}>
							<div className={styles.inputContent}>
								<Htag className={styles.label}>Email or Username</Htag>
								<input type="text" className={styles.input} placeholder="Enter your email address or username" />
							</div>
							<div className={styles.inputContent}>
								<div className={styles.label}>
									<span>Passcode</span>
									<Link href={'#'}>Forgot Code?</Link>
								</div>
								<input type="password" className={styles.input} placeholder="Enter your password" />
							</div>
							<div className={styles.inputContent}>
								<ButtonTag appearence='primary' className={styles.submitButton}>Sign in</ButtonTag>
							</div>
						</form>
						<div className={styles.formTopNote}>New on our platform?<Link href={'#'}>Create an account</Link></div>
						<div className={styles.formMiddleNote}><span className={styles.textLine}> -- OR -- </span></div>
						<div className={styles.formBottomNote}>
							<Link href={'#'}>Github</Link>
							<Link href={'#'}>Google</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default LoginComponent;