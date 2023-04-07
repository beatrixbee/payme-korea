import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		CredentialsProvider({
			async authorize(credentials) {
				const { email, password } = credentials;

				// Replace this with your own authentication logic
				if (email === 'admin' && password === 'admin') {
					// Return user object if authentication is successful
					return { email: 'azizhusanov@example.com', name: 'Aziz' };
				} else {
					// Return null if authentication fails
					return null;
				}
			}
		})
		// ...add more providers here
	],
	debug: process.env.NODE_ENV === 'development',
	secret: process.env.JWT_SECRET,
	session: {
		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 60 * 30, // 0.5 hour
	},
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token
			}
			return token
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			session.accessToken = token.accessToken
			return session
		}
	},
	pages: {
		signIn: '/login',
	}

}

export default NextAuth(authOptions)