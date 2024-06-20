/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PEt3bqOhhGJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client"
import { Google_SignIn } from "@/components/Google_SignIn"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"
import { MagicLink } from "@/components/MagicLink"

export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
          <div className="mx-4 w-full max-w-md space-y-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900 sm:p-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
              <p className="text-gray-500 dark:text-gray-400">Enter your email and password to sign in.</p>
            </div>
            <MagicLink />
            <Google_SignIn />
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400" prefetch={false}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      )
    }