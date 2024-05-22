import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import { Providers } from './providers'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Home from './about/page';
import About from './about/page';
import Projects from './projects/page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='page-container'>
          <Providers>
            <header>
              <Navbar
                home={'Home'}
                about={'About'}
                projects={'Projects'}
                skills={'Skills'}
                contact={'Contact'} />
            </header>
            <main className='main-content'>
              {children}
            </main>
            <footer className='footer'>
              <Footer
                instagram={'https://www.instagram.com/brenner_costa01/'}
                linkedIn={'https://www.linkedin.com/in/brenner-costa-70994b197'}
                phoneNumber={'(32) 9 9816-8565'}
                email={'brennercostadeveloper'}
                github={'https://github.com/Brenner-Costa'} />
            </footer>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}