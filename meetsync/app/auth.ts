
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import NodeMailerProvider from "next-auth/providers/nodemailer"
import { XataAdapter } from "@auth/xata-adapter"
import { XataClient } from "@/app/xata"

const client = new XataClient()

const authOptions = {
  adapter: XataAdapter(client),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    NodeMailerProvider({
      name: "Magic Link",
      server: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
],
  secret: process.env.AUTH_SECRET
}
 
export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)