import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { mixins, media, Section, Heading } from "../../styles/index";
import { formatDate } from "../../utils/index";

const StyledContainer = styled(Section)`
  position: relative;
  margin-top: 6rem;
`;

const StyledSectionTitle = styled(Heading)`
  margin-bottom: 2.35rem;
  font-size: 1.6rem;
`;
const StyledListLink = styled(Link)`
  color: #ccd6f6;
  &:hover {
    color: #eee;
  }
`;
const StyledPostContainer = styled.div`
  margin-bottom: 40px;
`;
const StyledPostTitle = styled.h3`
  margin-bottom: 0.465rem;
  font-size: 22px;
  font-weight: bold;
  &:hover {
    color: #eee;
  }
`;
const StyledDescription = styled.p`
  margin-bottom: 4px;
  font-size: 18px;
`;

const LatestArticles = ({ postEdges }) => {
  const postList = postEdges.map((post) => {
    return {
      path: post.node.fields.slug,
      title: post.node.frontmatter.title,
      date: post.node.fields.date,
      description: post.node.frontmatter.description,
      timeToRead: post.node.timeToRead,
    };
  });

  return (
    <StyledContainer>
      <StyledSectionTitle>Blog</StyledSectionTitle>

      {postList.map((post, i) => {
        const date = formatDate(post.date);
        return (
          <StyledPostContainer key={i}>
            <StyledListLink to={post.path}>
              <StyledPostTitle>{post.title}</StyledPostTitle>
            </StyledListLink>
            <StyledDescription>
              <em>{post.description}</em>
            </StyledDescription>
            <StyledListLink to={post.path}>Read →</StyledListLink>
          </StyledPostContainer>
        );
      })}
      <StyledListLink to="/blog/">View all articles</StyledListLink>
    </StyledContainer>
  );
};

// About.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default LatestArticles;
