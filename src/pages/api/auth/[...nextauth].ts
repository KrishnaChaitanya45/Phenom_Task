import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

let clientId = "";
let clientSecret = "";
if (process.env.CLIENT_ID && process.env.CLIENT_SECRET) {
  clientId = process.env.CLIENT_ID;
  clientSecret = process.env.CLIENT_SECRET;
}
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
