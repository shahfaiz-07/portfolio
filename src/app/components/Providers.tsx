// app/providers.tsx
"use client"
import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ToastProvider />
          {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}