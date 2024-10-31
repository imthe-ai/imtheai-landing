"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-20 inset-x-0 top-0 bg-white/75 w-full border-b border-gray-200 backdrop-blur">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 text-xl font-semibold">
            <img src="/LogoXX.png" alt="" className="w-[150px]" />
          </Link>

          <div className="h-full flex items-center space-x-4">
            {/* About Page Link */}
            <Link
              href="/about"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              About
            </Link>

            {/* Contact Us Button with Tally Modal */}
            <Link
              href="#tally-open=w7vAoZ&tally-layout=modal&tally-emoji-animation=wave"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Contact Us
            </Link>

            <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

            {/* Get Started Link */}
            <Link
              href="https://app.imthe.ai"
              className={buttonVariants({
                size: "sm",
                className: "hidden text-[1rem] sm:flex items-center gap-1",
              })}
            >
              Get Started For Free
              <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
