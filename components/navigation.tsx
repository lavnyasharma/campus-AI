"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onEnrollClick: () => void
}

export function Navigation({ onEnrollClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Program", href: "#program" },
    { name: "Features", href: "#features" },
    { name: "Outcomes", href: "#outcomes" },
    { name: "Incentives", href: "#incentives" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-3xl shadow-2xl border-b-2 border-white/30" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/corover-logo.png" alt="CoRover.ai Logo" width={120} height={36} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-600 hover:to-blue-600 transition-all duration-200 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              onClick={onEnrollClick}
              className="bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 hover:from-orange-700 hover:via-red-600 hover:to-blue-700 text-white rounded-2xl text-sm px-4 py-2 shadow-xl backdrop-blur-sm border-2 border-white/30"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 text-slate-700 hover:bg-white/20 backdrop-blur-sm rounded-xl"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-3xl border-t-2 border-white/30 rounded-b-2xl shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm rounded-xl hover:bg-white/20 backdrop-blur-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    onEnrollClick()
                    setIsOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 hover:from-orange-700 hover:via-red-600 hover:to-blue-700 text-white rounded-2xl text-sm backdrop-blur-sm border-2 border-white/30 shadow-xl"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
