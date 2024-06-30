import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { db } from '@/lib/db';
import authConfig from "@/auth.config";

export const {
    handlers: { GET, POST },
    auth,
    handlers,
    signIn,
    signOut
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig
})