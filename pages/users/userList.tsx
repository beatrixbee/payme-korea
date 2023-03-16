import { Htag } from '../../components'
import { withLayout } from '../../layout/Layout'

function UserList(): JSX.Element {
	return (
		<Htag
			tag='h1'
		>User List</Htag>
	)
}

export default withLayout(UserList)