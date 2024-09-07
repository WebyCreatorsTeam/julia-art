import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    // matcher: ["/dashboard/:path*"],
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// export const config = { matcher: ['/extra', '/dashboard/:path*'] };