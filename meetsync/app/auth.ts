
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { XataAdapter } from "@auth/xata-adapter"
import { XataClient } from "@/app/xata"

const client = new XataClient()

const authOptions = {
  adapter: XataAdapter(client),
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET
  })],
  secret: process.env.AUTH_SECRET
}
 
export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)