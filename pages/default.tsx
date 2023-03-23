import { ButtonTag, Htag, Ptag } from '../components';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { DashlightComponent } from '../page-components';

function Default({ }): JSX.Element {

	return (
		<DashlightComponent>
			hello
		</DashlightComponent>
	);
}

export default withLayout(Default);