import { ButtonTag, Htag, Ptag } from '../components';
import React from 'react';
import { withLayout } from '../layout/Layout';

function Default({ }): JSX.Element {

	return (
		<>
			<Htag tag='h1' >Default</Htag>
		</>
	);
}

export default withLayout(Default);