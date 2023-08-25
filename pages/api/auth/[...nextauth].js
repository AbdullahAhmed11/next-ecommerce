import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
        // ...add more providers here
    ],
}
export default NextAuth(authOptions)