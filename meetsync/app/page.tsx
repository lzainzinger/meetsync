import * as React from "react"

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
import Header from "@/components/Header"
import TallyForm from "@/components/TallyForm"

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <section id="product">
        <Product />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="feedback">
        <TallyForm />
      </section>

      <section id="newsletter">
        <Newsletter />
      </section>
      
    </>
      
  )
}

export default Home