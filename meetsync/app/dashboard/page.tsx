/**
 * v0 by Vercel.
 * @see https://v0.dev/t/E1dWTqpu0Ps
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { auth } from "../auth"
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await auth()
  if (!session) redirect("/")
  return (
    <div className="flex min-h-screen">
      <div className="bg-background border-r px-4 py-6 flex flex-col gap-4">
        <Link href="#" className="flex items-center gap-2 text-primary" prefetch={false}>
          <UserIcon className="w-5 h-5" />
          <span>Profile</span>
        </Link>
        <Link href="#" className="flex items-center gap-2 text-muted-foreground" prefetch={false}>
          <BarChartIcon className="w-5 h-5" />
          <span>Statistics</span>
        </Link>
        <Link href="#" className="flex items-center gap-2 text-muted-foreground" prefetch={false}>
          <SettingsIcon className="w-5 h-5" />
          <span>Settings</span>
        </Link>
        <div className="mt-auto">
          <Link href="/api/auth/signout">
            <Button variant="ghost" className="flex items-center gap-2">
              <LogOutIcon className="w-5 h-5" />
              <span>Logout</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 bg-muted/40 p-6">
        <div className="max-w-full mx-auto">
          <div className="flex items-center justify-between mb-6">
            <form className="flex-1">
              <Input placeholder="Search votes..." className="bg-background" />
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-4 h-4" />
                  <span>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>Recent</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <TrendingUpIcon className="w-4 h-4" />
                    <span>Trending</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <FlameIcon className="w-4 h-4" />
                    <span>Hot</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="relative group">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">Create new vote</span>
              </Link>
              <CardContent className="flex items-center justify-center h-full">
                <Button variant="secondary" size="icon" className="text-4xl">
                  <PlusIcon className="w-8 h-8" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">@johndoe</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Should we switch to a new CRM?</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ClockIcon className="w-4 h-4" />
                    <span>2 days ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm">
                    Yes
                  </Button>
                  <Button variant="outline" size="sm">
                    No
                  </Button>
                  <Button variant="outline" size="sm">
                    Abstain
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="w-4 h-4" />
                  <span>24 votes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span>18</span>
                  <ThumbsDownIcon className="w-4 h-4" />
                  <span>4</span>
                  <MinusIcon className="w-4 h-4" />
                  <span>2</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Jane Doe</h3>
                    <p className="text-sm text-muted-foreground">@janedoe</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Should we move to a new office?</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ClockIcon className="w-4 h-4" />
                    <span>1 week ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm">
                    Yes
                  </Button>
                  <Button variant="outline" size="sm">
                    No
                  </Button>
                  <Button variant="outline" size="sm">
                    Abstain
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="w-4 h-4" />
                  <span>32 votes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span>24</span>
                  <ThumbsDownIcon className="w-4 h-4" />
                  <span>6</span>
                  <MinusIcon className="w-4 h-4" />
                  <span>2</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Bob Smith</h3>
                    <p className="text-sm text-muted-foreground">@bobsmith</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Should we switch to a new project management tool?</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ClockIcon className="w-4 h-4" />
                    <span>2 weeks ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm">
                    Yes
                  </Button>
                  <Button variant="outline" size="sm">
                    No
                  </Button>
                  <Button variant="outline" size="sm">
                    Abstain
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserIcon className="w-4 h-4" />
                  <span>41 votes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span>28</span>
                  <ThumbsDownIcon className="w-4 h-4" />
                  <span>9</span>
                  <MinusIcon className="w-4 h-4" />
                  <span>4</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function BarChartIcon(props:any) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function ClockIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function FilterIcon(props:any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function FlameIcon(props:any) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function LogOutIcon(props:any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function MinusIcon(props:any) {
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
      <path d="M5 12h14" />
    </svg>
  )
}


function MoveHorizontalIcon(props:any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function PlusIcon(props:any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SettingsIcon(props:any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ThumbsDownIcon(props:any) {
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props:any) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function TrendingUpIcon(props:any) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function UserIcon(props:any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}