import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

// Styles
import GlobalStyles from 'src/styles/global'
import RootProvider from 'src/providers'

import { Inter } from 'next/font/google'

const localInterFont = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {

  return (
    <RootProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* WEB APP */}
        <meta name="theme-color" content="#faf9f8" />
        <meta name="msapplication-navbutton-color" content="#ECE5DD" />

        <link rel="manifest" href="/manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="[NAME]" />
        <meta name="apple-mobile-web-app-title" content="[NAME]" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="300x300"
          href="/assets/images/"
        />
        <link
          rel="shortcut icon"
          href="/assets/images/"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/images/"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="300x300"
          href="/assets/images/"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          type="image/x-icon"
          href="/assets/images/"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/assets/images/"
        />
        <link
          rel="icon"
          sizes="16x16"
          type="image/x-icon"
          href="/assets/images/"
        />

        {/* SEO */}
        <meta
          name="description"
          content=""
        />
        <meta name="robots" content="index" />
        <meta name="Googlebot" content="index" />
        <meta name="AdsBot-Google" content="index" />
        <meta name="author" content="[NAME]" />
        <meta
          name="copyright"
          content="All rights reserved - &copy;[NAME]"
        />
        <meta name="author" content="[NAME]" />
        <meta
          name="keywords"
          content=""
        />

        <meta name="language" content="Portuguese" />
        <meta name="lang" content="pt-BR" />
        <meta name="revisit-after" content="1 days" />

        {/* <!-- Open Graph / Meta --> */}
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="[NAME]" />
        <meta property="og:site_name" content="[NAME]" />
        <meta property="og:url" content="https://[NAME].co" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:image" content="assets/images/.jpeg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:site" content="@[NAME]_br" />
        <meta property="twitter:creator" content="@[NAME]_br" />
        <meta property="twitter:url" content="https://[NAME].co" />
        <meta property="twitter:title" content="[NAME]" />
        <meta
          property="twitter:description"
          content=""
        />
        <meta property="twitter:card" content="assets/images/.jpeg" />
        <meta
          property="twitter:image"
          content="assets/images/"
        />

        <style>
          {`
            * {
              font-family: ${localInterFont.style.fontFamily};
            }
          `}
        </style>
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
      <div id="outer-view" />
      <Analytics />
    </RootProvider>
  )
}

export default MyApp
