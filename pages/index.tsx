import { ButtonTag, Htag, Ptag } from '../components';
import React from 'react';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1' >AnvarovSaid</Htag>
			<span className='h1'>Typography</span>
			<ButtonTag appearence='primary' className='dsa'>Reports</ButtonTag>
			<ButtonTag appearence='primary' arrow='right'>Reports</ButtonTag>
			<ButtonTag appearence='white'>Reports</ButtonTag>
			<ButtonTag appearence='white' arrow='right'>Reports</ButtonTag>
			<ButtonTag appearence='white' arrow='down'>Reports</ButtonTag>
			<Ptag>Some text default size</Ptag>
			<Ptag size='l'>Some text large size</Ptag>
			<Ptag size='m'>Some text large size</Ptag>
			<Ptag size='s'>Some text large size</Ptag>
		</>
	);
}

export default withLayout(Home);