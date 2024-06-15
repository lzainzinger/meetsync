import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
    return(
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e5fdb1] to-[#009948] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  We are currently working on this product. Get updates with our Newsletter! <a href="#newsletter" className="font-semibold text-primary"><span className="absolute inset-0" aria-hidden="true"></span>Sign Up <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Simplify meeting your friends!</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600"><span className="text-primary">MeetSync</span> transforms the way friends plan and organize gatherings, making the process seamless, inclusive, and fun. With our app, spending quality time with friends has never been easier. Join today and start planning your next unforgettable get-together!</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="/login"><Button>Get Started</Button></Link>
                  <a href="#product" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e5fdb1] to-[#009948] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div>
        </div>
    );
}

export default Hero