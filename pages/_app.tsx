import type { AppProps } from "next/app";
import {} from "next/font/google";
import React from "react";
import { Header } from "../components/header";
import Page from "../components/page";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Header />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
