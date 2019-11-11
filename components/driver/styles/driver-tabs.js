import styled from "styled-components";
import appBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";

export const DriverTab = styled(Tab)`
  .MuiButtonBase-root,
  .MuiTab-wrapper {
    color: white;
    font-family: "Titillium Web";
    font-size: 16px;
    font-weight: 800;
    text-transform: none;
  }
`;

export const AppBar = styled(appBar)`
  .MuiTabs-root {
    background: ${({ theme }) => theme.red};
    color: white;
    font-family: "Titillium Web";
  }
`;
