import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EvalLab',
  description: 'Evaluate and analyze the performance of large language models',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">EvalLab</Link>
              <div className="space-x-4">
                <Link href="/experiments">
                  <Button variant="ghost">Experiments</Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Link href="/settings">
                  <Button variant="ghost">Settings</Button>
                </Link>
                <Button variant="outline">Logout</Button>
              </div>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-100 py-4">
            <div className="container mx-auto px-4 text-center text-sm text-gray-600">
              <p>&copy; 2025 EvalLab. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <Link href="/docs" className="hover:underline">Documentation</Link>
                <Link href="/support" className="hover:underline">Support</Link>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                <Link href="/terms" className="hover:underline">Terms of Service</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

