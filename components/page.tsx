import React from "react";
import Meta from "./meta";
class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Page;
