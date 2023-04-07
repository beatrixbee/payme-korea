import { ButtonTag, Htag, Ptag } from '../components';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { DashlightComponent } from '../page-components';
import { useSession } from 'next-auth/react';

function Sales({ }): JSX.Element {
	const { data: session, status } = useSession({ required: true });

	return (
		<>
			<DashlightComponent />
		</>
	);
}

export default withLayout(Sales);