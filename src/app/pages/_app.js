import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chromatics | Premium Home Automation & AV Solutions</title>
        <meta name="description" content="Chromatics offers cutting-edge home automation and audio-visual solutions for luxury homes and businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;