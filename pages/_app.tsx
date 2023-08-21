import "@/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SPHERUS</title>
        <meta
          name="description"
          content="a collection of attempts to convey ineffable emotions."
        />
        <meta name="robots" content="index" />
        <meta name="theme-color" content="#000000" />

        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
