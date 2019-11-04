import React from "react";
import { ThemeProvider } from "@material-ui/styles";

class Page extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Page;
