import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = {
  sm: "300px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
const theme = extendTheme({
  breakpoints,
  styles: {
    global: (props: any) => ({
      body: {
        bg: "white",
      },
    }),
  },
});

export default theme;
