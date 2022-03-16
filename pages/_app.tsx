import type { AppProps } from "next/app";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "../components/page";

import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default MyApp;
