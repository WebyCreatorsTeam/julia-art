import NextAuth, { CredentialsSignin } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import type { UserType } from './app/(dashboard)/_ts/definitions';
import User from './app/lib/dashboard/_models/user.mode';
import connectToDatabase from './app/lib/mongodb';

async function getUser(email: string): Promise<UserType | undefined> {
    try {
        await connectToDatabase()
        const user = await User.findOne({ userEmail: email });
        return user
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {

                const parsedCredentials = z.object({
                    userEmail: z
                        .string().email(),
                    userPassword: z
                        .string().min(6)
                })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { userEmail, userPassword } = parsedCredentials.data;
                    console.log(parsedCredentials)
                    const user = await getUser(userEmail);
                    // return user ? user : null;

                    // console.log("user:", user)
                    if (!user) return null;
                    const userPasswordsMatch = await bcrypt.compare(String(userPassword), String(user.userPassword));

                    if (userPasswordsMatch) return user;
                }
                console.log('Invalid credentials');
                return null as any;
            },
        }),
    ],
});