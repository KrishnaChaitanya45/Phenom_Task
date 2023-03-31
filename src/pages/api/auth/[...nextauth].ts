import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "140361786364-v9c5o45ia23kmmg0v83bau4q0rgcjmfc.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
