import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import { Providers } from './providers'
import { Navbar } from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>
            <header>
              <Navbar home={'Home'} about={'About'} projects={'Projects'} skills={'Skills'} contact={'Contact'} />
              {/* <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn> */}
            </header>
            <main>
              {children}
            </main>

          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}