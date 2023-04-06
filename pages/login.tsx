import React from 'react';
import { Footer } from '../layout/Footer/Footer';
import { withLayout } from '../layout/Layout';
import LoginComponent from '../page-components/LoginComponent/LoginComponent';

function Login(): JSX.Element {
	// const { data: session, status } = useSession({ required: true });

	return (
		<>
			<LoginComponent />
		</>
	);
}

export default Login;