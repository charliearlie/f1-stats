import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "../components/page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
}

export default MyApp;
