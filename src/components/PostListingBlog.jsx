import React, { useState, useEffect, useRef } from "react";
import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import sr from "../utils/sr";
import { srConfig } from "../../data/SiteConfig";
import { FormattedIcon } from "./icons/index";
import { formatDate } from "../utils/index";
import {
  theme,
  mixins,
  media,
  Section,
  Button,
  Heading,
} from "../styles/index";

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4rem;
  width: 100%;
  max-width: 100%;
`;
const StyledSectionTitle = styled(Heading)`
  margin-bottom: 2.35rem;
  font-size: 1.6rem;
`;
const StyledArchiveLink = styled(Link)`
  ${mixins.inlineLink};
  text-align: center;
  margin: 0 auto;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  &:after {
    bottom: 0.1em;
  }
`;
const StyledGrid = styled.div`
  width: 100%;
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 25px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledProjectInner = styled(Link)`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.danBgColor};
`;
const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const StyledFolder = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`;
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.pinkish};
`;
const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.slate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const StyledMoreButton = styled(Button)`
  margin: 50px auto 0;
`;
const StyledTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

const PostListingBlog = ({ posts }) => {
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, []);

  const GRID_LIMIT = 12;

  return (
    <StyledContainer>
      <StyledGrid>
        <TransitionGroup className="projects">
          {posts &&
            posts.map(({ node }, i) => {
              const { frontmatter, fields, timeToRead } = node;
              const { slug } = fields;
              const { title, tags, date, description } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 400 : 400}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    ref={(el) => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${
                        i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                      }ms`,
                    }}
                  >
                    <StyledProjectInner to={slug}>
                      <header>
                        <StyledProjectName>{title}</StyledProjectName>
                        <StyledProjectDescription
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                      </header>
                      <StyledTimeContainer>
                        <StyledProjectDescription
                          dangerouslySetInnerHTML={{ __html: formatDate(date) }}
                        />
                        <StyledProjectDescription
                          dangerouslySetInnerHTML={{
                            __html: `${timeToRead} min read`,
                          }}
                        />
                      </StyledTimeContainer>
                      <footer>
                        {tags && (
                          <StyledTechList>
                            {tags.map((tag, i) => (
                              <li key={i}>{tag}</li>
                            ))}
                          </StyledTechList>
                        )}
                      </footer>
                    </StyledProjectInner>
                  </StyledProject>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </StyledGrid>
    </StyledContainer>
  );
};

PostListingBlog.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostListingBlog;
