import React from "react";
import { Header } from "./header";
import Meta from "./meta";
class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <>{this.props.children}</>
      </div>
    );
  }
}

export default Page;
