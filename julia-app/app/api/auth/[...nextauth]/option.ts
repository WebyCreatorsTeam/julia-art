import type { NextAuthOptions } from "next-auth"
import credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, account, profile }: { token: any, account: any, profile: any }) {
            if (account && account.type === 'credentials') {
                token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
            }
            return token;
        },
        async session({ session, token, user }: any) {
            session.user.id = token.userId;
            return session;
        },
    },
    pages: {
        signIn: '/login', // Set custom signin page path
    },
    providers: [
        credentials({
            name: 'Credentials',
            credentials: {
                userEmail: { label: "userEmail", type: "email", placeholder: "Введите E-mail" },
                userPassword: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { userEmail, userPassword } = credentials as {
                    userEmail: string;
                    userPassword: string;
                };

                return authenticate(userEmail, userPassword);
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET, // SECRET env variable
}