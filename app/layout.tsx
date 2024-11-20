import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { FacebookIcon } from "lucide-react"
import { TwitterIcon } from "lucide-react"
import { InstagramIcon } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

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
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1 ">{children}</div>
              {/* Footer */}
              <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">عن الشركة</h3>
                      <ul className="space-y-2">
                        <li><Link href="#" className="hover:underline">من نحن</Link></li>
                        <li><Link href="#" className="hover:underline">وظائف</Link></li>
                        <li><Link href="#" className="hover:underline">اتصل بنا</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">المساعدة</h3>
                      <ul className="space-y-2">
                        <li><Link href="#" className="hover:underline">الأسئلة الشائعة</Link></li>
                        <li><Link href="#" className="hover:underline">سياسة الخصوصية</Link></li>
                        <li><Link href="#" className="hover:underline">شروط الاستخدام</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
                      <div className="flex space-x-4">
                        <Link href="#" className="hover:text-primary">
                          <FacebookIcon className="h-6 w-6" />
                          <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="hover:text-primary">
                          <TwitterIcon className="h-6 w-6" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="hover:text-primary">
                          <InstagramIcon className="h-6 w-6" />
                          <span className="sr-only">Instagram</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} شركة الجزيرة للسفر. جميع الحقوق محفوظة.</p>
                  </div>
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
