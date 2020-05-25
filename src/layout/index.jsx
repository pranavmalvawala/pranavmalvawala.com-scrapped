import React from "react";
import styled from "styled-components";
import { Head, Navigation, Footer } from "../components/index";
import { GlobalStyle, Main } from "../styles/index";

// enables smooth scrolling to the div matching the id
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const StyledMainContainer = styled(Main)`
  counter-reset: section;
  margin-top: 140px;
  padding: 60px 0 0;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <Navigation />

      <StyledMainContainer id="content">{children}</StyledMainContainer>

      <Footer />
    </>
  );
};

export default Layout;
