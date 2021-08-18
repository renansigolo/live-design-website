import Head from 'next/head'
import About from '../components/About'
import ButtonToTop from '../components/ButtonToTop'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Portfolio from '../components/Portfolio'
import Profile from '../components/Profile'
import Stages from '../components/Stages'
import Testimony from '../components/Testimony'
import { GA_TRACKING_ID } from '../lib/gtag'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Live Design - Projetos de Identidade Visual</title>
        <meta name="author" content="Renan Sigolo" />
        <meta
          name="description"
          content="Live Design - Projetos de Identidade Visual"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Live Design" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* {process.env.NODE_ENV === 'production' ? (
          <> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
      
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
          }}
        />
        {/* </>
        ) : null} */}
      </Head>

      <Navigation />
      <ButtonToTop />

      <main>
        <Hero />
        <About />
        <Stages />
        <Profile />
        <Testimony />
        <Portfolio />
      </main>

      <Footer />
    </div>
  )
}
