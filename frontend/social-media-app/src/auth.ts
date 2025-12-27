import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import AuthPrisma from "./prisma/prisma";

export const { handlers } = NextAuth({
  providers: [Google],
  adapter: PrismaAdapter(AuthPrisma),
  // callbacks:{
  //   async signIn({ user }) {
  //     console.log("User signed in:", user);
  //     return true;
  //   }
  // }
});
