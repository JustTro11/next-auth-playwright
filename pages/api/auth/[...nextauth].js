import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "../../../prisma/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.id = profile.id
  //     }
  //     // console.log(token);
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     // session.accessToken = token.accessToken;
  //     // session.user.id = token.id
  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

export default NextAuth(authOptions);
