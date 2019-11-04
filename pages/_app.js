import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Meta from "../components/meta.tsx";
import Header from "../components/header/header";

const theme = {
  red: "#e10600",
  black: "#393939",
  offWhite: "#f9f9fc",
  softBlue: "#68b2fc",
  maxWidth: "1100px",
  shadows: [
    "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
    "0 12px 24px 0 rgba(0, 0, 0, 0.19)"
  ],
  spacingUnit: "8px",
  spacingUnits: num => `${8 * num}px`,
  maxMobileWidth: "600px",
  maxTabletWidth: "1024px"
};

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <Meta />
        </Head>
        <Header />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
