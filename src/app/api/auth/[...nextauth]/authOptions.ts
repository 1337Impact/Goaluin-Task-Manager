import { db } from "@/lib/db";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {

    async signIn(data: any) {
      const user = await db.user.findUnique({
        where: { email: data.user.email },
      });
      if (!user) {
        try {
          const newUser = await db.user.create({
            data: {
              name: data.user.name,
              email: data.user.email,
              image: data.user.image,
            },
          });
        } catch (error) {
          return false;
        }
      }
      return true;
    },
    
    async jwt({ token, user, session}) {
      if (user) {
        const newUser = await db.user.findUnique({where: {email: user.email as string}});
        return {
          ...token,
          id: newUser?.id,
        }
      };
      return token;
    },

    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    }
  },
};

