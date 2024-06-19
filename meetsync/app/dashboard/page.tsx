import * as React from "react"
import { auth } from "@/app/auth"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { defaultConfig } from "next/dist/server/config-shared"
import Hero from "@/components/Hero"
import Product from "@/components/Product"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import Newsletter from "@/components/Newsletter"

const Dashboard = async () => {
const session = await auth()
  if (!session) return <div>Not authenticated</div>
  return (
    <>
      <Hero />
    </>
      
  )
}

export default Dashboard