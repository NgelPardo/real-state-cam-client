import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from 'zod';
import https from "https";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const credentialsSchema = z.object({
  email: z.string(),
  password: z.string().min(5),
});

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const authConfig : NextAuthConfig = {
    pages: {
        signIn: '/auth/login'
    },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials){
                const parsed = credentialsSchema.safeParse(credentials);
                if (!parsed.success) return null;

                const { email, password } = parsed.data;

                const response = await fetch(`${apiBaseUrl}/api/users/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });

                if (!response.ok) return null;

                const result = await response.json();

                if (!result.isSuccess || !result.value?.token || !result.value?.user) return null;

                const { user, token } = result.value;

                return {
                    id: user.id,
                    name: `${user.name} ${user.lastName}`,
                    email: user.email,
                    token,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }){
            if (user) {
                token.accessToken = user.token;
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }){
            session.user = {
                ...session.user,
                id: token.id as string,
            };
            session.accessToken = token.accessToken as string;
            return session;
        }
    },
    secret: process.env.AUTH_SECRET,
};

export const { signIn, signOut, auth, handlers } = NextAuth( authConfig );