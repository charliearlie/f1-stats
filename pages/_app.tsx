import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "../components/page";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Page>
        <h1>Where the header will be</h1>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
}

export default MyApp;
