import { ButtonTag, Htag, Ptag } from '../components';
import React from 'react';
import { withLayout } from '../layout/Layout';

function Sales({ }): JSX.Element {

	return (
		<>
			<Htag tag='h1' >Sales</Htag>
		</>
	);
}

export default withLayout(Sales);