"use server"

import { signIn } from "../auth";
import { AuthError } from "next-auth";

export async function EmailSignIn(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
        console.log(formData)
      await signIn('nodemailer', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        return 'log in failed'
      }
      throw error;
    }
  }

  export async function GoogleSignIn() {
    try {
      await signIn('google', {redirectTo: "/dashboard"});
    } catch (error) {
      if (error instanceof AuthError) {
        return 'log in failed'
      }
      throw error;
    }
  }