import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "AI Carear Coach",
  description: "",

}

const inter = Inter({subsets: ['latin']});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <main className="min-h-screen">
              <Header />
              {children}
            </main>

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-100">
                <p>© 2021</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
