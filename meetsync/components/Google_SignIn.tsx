
import { signIn } from "@/app/auth"
import { Button } from "./ui/button"
 
export function Google_SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button type="submit" variant="outline" className="w-full">Sign in with Google</Button>
    </form>
  )
} 