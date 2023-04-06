import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Admin() {
	const router = useRouter();
	const { status } = useSession({
		required: true,
		// The default behavior is to redirect the user to the sign-in page,
		// from where - after a successful login - they will be sent back to the page they started on.
		// You can also define an onUnauthenticated() callback,if you would like to do something else

		// onUnauthenticated() {
		// 	router.push('/')
		// }
	})

	if (status === 'loading') {
		return "Loading or not authenticated..."
	}

	return (
		<>
			"User logged in"
			< a href="/" > Go to main</a >

		</>
	)
}