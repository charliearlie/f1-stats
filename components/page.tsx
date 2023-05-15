import React from "react";
import { Header } from "./header";
import Meta from "./meta";
class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <div className="xl:max-w-screen-xl mx-auto sm:px-4 xl:px-0">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Page;
