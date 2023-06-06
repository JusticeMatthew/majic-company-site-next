import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Majic Webdesign</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="We help local business find new customers online and grow their business through stand-out websites & videos."
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <meta property="og:title" content="Majic Webdesign" />
        <meta
          property="og:description"
          content="We help local business find new customers online and grow their business through stand-out websites & videos."
        />
        <meta property="og:image" content="/og-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
