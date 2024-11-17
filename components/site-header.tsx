"use client"

import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { Palette } from "lucide-react"
import { Menu } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-fuchsia-700">
        <Link href="#" className="flex items-center justify-center">
       <img className="logo" src="/next.svg" alt="logo"/>
        </Link>
        <button onClick={toggleMenu} className="ml-auto lg:hidden text-fuchsia-400">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute top-14 left-0 right-0 bg-black border-b border-fuchsia-700 lg:border-none lg:static flex-col lg:flex-row gap-4 p-4 lg:p-0 lg:ml-auto`}>
          <Link className="text-sm font-medium hover:text-fuchsia-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-fuchsia-400 transition-colors" href="#background">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:text-fuchsia-400 transition-colors" href="#portfolio">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:text-fuchsia-400 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
  )
}
