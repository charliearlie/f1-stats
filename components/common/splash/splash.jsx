import { SplashContent, StyledSplash } from "../styles/splash";

function Splash({ children, currentPath }) {
  if (children) return <StyledSplash>{children}</StyledSplash>;
  switch (currentPath) {
    case "Home":
      return (
        <StyledSplash>
          <SplashContent>
            <h1 style={{ color: "white" }}>F1 Stats</h1>
            <h2 style={{ color: "white" }}>Homepage splash</h2>
          </SplashContent>
        </StyledSplash>
      );
    default:
      return null;
  }
}

export default Splash;
