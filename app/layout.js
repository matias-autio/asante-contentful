import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import getSiteSettings from "@/lib/api/getSiteSettings";

export async function generateMetadata() {

  const siteSettings = await getSiteSettings();

  return {
    title: siteSettings.siteName,
    description: siteSettings.siteDescription,
  }
}

export default function RootLayout({ children }) {

  const typekitUrl = "https://use.typekit.net/vhf8wzz.css";

  return (
    <html lang="en">
      <head>
        <link rel="preload" href={typekitUrl} as="style" />
        <link rel="stylesheet" href={typekitUrl} />
      </head>
      <body
        className="antialiased"
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
