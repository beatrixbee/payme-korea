import Link from 'next/link';
import React, { useState } from 'react';
import { ButtonTag, Htag } from '../../components';
import { Footer } from '../../layout/Footer/Footer';
import styles from './LoginComponent.module.css';
import { LoginComponentProps } from './LoginComponent.props';
import Image from 'next/image';
import logoPic from './logo.png';
import logoDarkPic from './logo-dark.png';
import cn from 'classnames';
import { signIn } from 'next-auth/react';


function LoginComponent({ }: LoginComponentProps): JSX.Element {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const result = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});

		if (!result?.error) {
			window.location.replace('/');
		} else {
			setErrorMessage(result.error);
			console.log(result)
		}
	};

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
						<form action="" className={styles.form} onSubmit={handleSubmit}>
							<div className={styles.inputContent}>
								<Htag className={styles.label}>Email or Username</Htag>
								<input
									type="text"
									className={styles.input}
									placeholder="Enter your email address or username"
									id="email"
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
							</div>
							<div className={styles.inputContent}>
								<div className={styles.label}>
									<span>Passcode</span>
									<Link href={'/login#'}>Forgot Code?</Link>
								</div>
								<input
									type="password"
									className={styles.input}
									placeholder="Enter your password"
									id="password"
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
							</div>
							<div className={styles.inputContent}>
								<ButtonTag appearence='primary' className={styles.submitButton} type="submit">Sign in</ButtonTag>
								{errorMessage && <p>{errorMessage}</p>}
							</div>
						</form>
						<div className={styles.formTopNote}>New on our platform?<Link href={'/login#'}>Create an account</Link></div>
						<div className={styles.formMiddleNote}><span className={styles.textLine}> -- OR -- </span></div>
						<div className={styles.formBottomNote}>
							<Link href={'/login#'}>Github</Link>
							<Link href={'/login#'}>Google</Link>
						</div>
						<div className={styles.formTopNote}><Link href={'/'}>Go to the main</Link></div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default LoginComponent;