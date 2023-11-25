import { db } from "@/lib/db";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
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
      try {
        const user = await db.user.findUnique({
          where: { email: data.user.email },
        });
        if (!user) {
          const newUser = await db.user.create({
            data: {
              name: data.user.name,
              email: data.user.email,
              image: data.user.image,
            },
          });
        }
      } catch (error) {
        console.log(error);
        return false;
      }
      return true;
    },
  },
};
