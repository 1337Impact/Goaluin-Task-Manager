import { db } from "@/lib/db";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
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
        const username = `@${data.user.name.split(" ")[0][0]}${data.user.name.split(" ")[1]}`.toLowerCase().slice(0, 10);
        try {
          const newUser = await prisma.user.create({
            data: {
              username: username,
              name: data.user.name,
              email: data.user.email,
              image: data.user.image,
              provider: "google",
            },
          });
        } catch (error) {
          //console.log(error);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user, session}) {
      if (user) {
        const newUser = await prisma.user.findUnique({where: {email: user.email as string}});
        return {
          ...token,
          id: newUser?.id,
          username: newUser?.username,
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
          username: token.username,
        },
      };
    }
  },
};

