import { loginWithGoogle, signIn } from "@/common/services/firebase";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn(email);
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID || "",
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.fullname = user.fullname;
        token.email = user.email;
        token.phone = user.phone;
        token.image = user.image;
        token.role = user.role;
      }
      if (account?.provider === "google") {
        const data = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          type: "google",
        };

        await loginWithGoogle(data, (data: any) => {
          token.fullname = data.fullname;
          token.email = data.email;
          token.role = data.role;
        });
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("phone" in token) {
        session.user.phone = token.phone;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
