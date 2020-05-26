import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../layout/index";
import {
  Hero,
  About,
  Contact,
  PostListingHome,
  Projects,
} from "../components/index";

const IndexPage = ({ location, data }) => {
  //console.log(data.projects.edges);
  const latestPostEdges = data.latest.edges;
  return (
    <Layout>
      <Hero data={data.hero.edges} />
      <PostListingHome postEdges={latestPostEdges} />
      <Projects data={data.projects.edges} />
      {/* <About data={data.about.edges} /> */}
      {/* <Contact data={data.contact.edges} /> */}
    </Layout>
  );
};

// IndexPage.propTypes = {
//   location: PropTypes.object.isRequired,
//   data: PropTypes.object.isRequired,
// };

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            buttonText
            name
          }
          html
        }
      }
    }

    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
          html
        }
      }
    }
    latest: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" } } }
      limit: 5
      sort: { fields: fields___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            description
            date
            template
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            github
            external
          }
          html
        }
      }
    }
  }
`;
