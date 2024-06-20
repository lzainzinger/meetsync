"use client"
import { useFormState } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { EmailSignIn } from "@/app/actions/auth_actions";

export function MagicLink() {
    const [errorMsg, dispatch] = useFormState(EmailSignIn, undefined)
    return (
        <form action={dispatch} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="name@example.com" required />
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
        </form>
    );
}