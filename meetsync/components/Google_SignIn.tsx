
import { signIn } from "@/app/auth"
import { Button } from "./ui/button"
import { GoogleSignIn } from "@/app/actions/auth_actions"
 
export function Google_SignIn() {
  return (
    <form
      action={GoogleSignIn}
    >
      <Button type="submit" variant="outline" className="w-full">Sign in with Google</Button>
    </form>
  )
} 