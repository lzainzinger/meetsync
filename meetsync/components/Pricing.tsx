/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9j9onxQTFjs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that fits your needs. No hidden fees, ever.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-gray-500 dark:text-gray-400">Perfect for individuals and small teams.</p>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Up to 5 users
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                5GB storage
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Basic analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Email support
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-gray-500 dark:text-gray-400">For growing teams and small businesses.</p>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Up to 25 users
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                50GB storage
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Advanced analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                24/7 email and chat support
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-gray-500 dark:text-gray-400">For large teams and organizations.</p>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Unlimited users
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Unlimited storage
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Enterprise-grade analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Dedicated account manager
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}