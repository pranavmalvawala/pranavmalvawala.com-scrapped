import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { FormattedIcon } from "./icons/index";
import { socialMedia } from "../../data/SiteConfig";
import { theme, mixins, media } from "../styles/index";
import github from "../../content/images/github.png";
import netlify from "../../content/images/netlify.png";
import gatsby from "../../content/images/gatsby.png";

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  padding: 0 2rem;
  margin: 4rem auto 5rem;
  justify-content: space-between;
  text-align: center;
  height: auto;
  min-height: 70px;
  ${media.phablet`flex-direction: column;`};
  ${media.tablet`padding: 0 50px;`};
`;
const StyledMetadata = styled.div`
  font-size: ${fontSizes.xs};
  line-height: 1;
  display: flex;
`;
const StyledListLink = styled(Link)`
  color: #ccd6f6;
  font-size: 20px;
  margin-right: 1.5rem;
  &:hover {
    color: #eee;
  }
`;
const StyledImage = styled.img`
  height: 30px;
  width: 30px;
  margin-bottom: 0;
`;
const StyledAnchor = styled.a`
  display: block;
  margin-right: 1.5rem;
`;
const StyledRssAnchor = styled.a`
  color: #ccd6f6;
  font-size: 20px;
  &:hover {
    color: #eee;
  }
`;

const Footer = () => {
  return (
    <StyledContainer>
      <StyledMetadata tabindex="-1">
        <StyledListLink to="/contact/">Contact</StyledListLink>
        <StyledRssAnchor
          href="https://www.pranavmalvawala.netlify.app/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </StyledRssAnchor>
      </StyledMetadata>
      <StyledMetadata tabindex="-1">
        <StyledAnchor
          href="https://www.github.com/pranavmalvawala"
          title="Open-source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImage src={github} alt="github" />
        </StyledAnchor>
        <StyledAnchor
          href="https://www.netlify.com/"
          title="Hosted by Netlify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImage src={netlify} alt="netlify" />
        </StyledAnchor>
        <a
          href="https://www.gatsbyjs.org/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImage src={gatsby} alt="gatsby" />
        </a>
      </StyledMetadata>
    </StyledContainer>
  );
};

// Footer.propTypes = {
//   githubInfo: PropTypes.object,
// };

export default Footer;
