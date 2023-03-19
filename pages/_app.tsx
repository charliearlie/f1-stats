import type { AppProps } from "next/app";
import React from "react";
import Page from "../components/page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <h1>Where the header will be</h1>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
