import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"

export const metadata = {
  title: "Organization Name - Making a Difference Together",
  description: "Join us in our mission to create positive change in our community and beyond.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

