import React from "react";
import { Header } from "./header";
import Meta from "./meta";
class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <div className="xl:max-w-screen-xl mx-auto">{this.props.children}</div>
      </div>
    );
  }
}

export default Page;
