import React from "react";
import Document from "next/document";

class MyDocument extends Document {
  static getInitialProps = async (ctx: any) => {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
        </React.Fragment>
      ]
    };
  };
}

export default MyDocument;
