import { Htag } from '../../components'
import { withLayout } from '../../layout/Layout'

function UserDetail(): JSX.Element {
	return (
		<Htag
			tag='h1'
		>Project Cards</Htag>
	)
}

export default withLayout(UserDetail)