import styled from "styled-components";

export const StyledSplash = styled.div`
  background: black;
  height: 400px;
  padding: 15px;
  width: 100%;
`;

export const SplashContent = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
`;
