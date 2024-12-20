import "@/styles/globals.css"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1 ">{children}</div>
              <footer className="w-full py-6 px-4 md:px-6 border-t border-red-700">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-xs text-gray-400">© 2024 RHZ Solutions. All rights reserved.</p>
                  <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                    <Link className="text-xs hover:text-fuchsia-400 transition-colors" href="#">
                      Terms of Service
                    </Link>
                    <Link className="text-xs hover:text-fuchsia-400 transition-colors" href="#">
                      Privacy
                    </Link>
                  </nav>
                </div>
              </footer>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
