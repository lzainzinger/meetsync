/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KZQgMRTzx4L
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Subscribe to our newsletter and never miss our updates
            </p>
          </div>
          <Card className="w-full max-w-sm space-y-2">
            <CardContent>
              <form className="flex space-x-2 py-8">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Get the latest news and updates about our products and services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}