'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
/* Added: import global palette & UI utilities */
import "../styles/palette.css"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      themes={['light', 'dark']}
    >
      {children}
    </NextThemesProvider>
  )
}
