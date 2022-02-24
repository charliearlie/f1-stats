import type { AppProps } from "next/app";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "../components/page";

import { useStore } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
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
