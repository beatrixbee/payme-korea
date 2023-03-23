import { ButtonTag, Htag, Ptag } from '../components';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { DashlightComponent } from '../page-components';

function Sales({ }): JSX.Element {

	return (
		<>
			<DashlightComponent />
		</>
	);
}

export default withLayout(Sales);