import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import { theme, mixins, media, Section } from "../styles/index";

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  ${media.tablet`padding-top: 0px;`};
  div {
    width: 100%;
  }
`;
const StyledTitle = styled.h2`
  font-size: 2.5rem;
  line-height: 1.1;
  margin: 0 0 2rem;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;

    console.log({ post, postNode });

    return (
      <Layout>
        <StyledContainer>
          <article>
            <header>
              <StyledTitle>{post.title}</StyledTitle>
            </header>
            {/* <div
             
              dangerouslySetInnerHTML={{ __html: postNode.html }}
            /> */}
          </article>
        </StyledContainer>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`;
