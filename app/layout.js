import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import getSiteSettings from "@/lib/api/getSiteSettings";
import { IBM_Plex_Serif, DM_Sans } from 'next/font/google'

const serif = IBM_Plex_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-serif',
})
 
const sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export async function generateMetadata() {

  const siteSettings = await getSiteSettings();

  return {
    title: siteSettings.siteName,
    description: siteSettings.siteDescription,
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${serif.variable} ${sans.variable} antialiased`}
      >
        <div className="container mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
