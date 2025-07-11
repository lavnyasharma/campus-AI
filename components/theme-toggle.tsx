"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-8 h-8 rounded-lg">
        <Sun className="h-3 w-3" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-3 w-3 text-orange-500 transition-all" />
      ) : (
        <Moon className="h-3 w-3 text-gray-600 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
