import React, { Component } from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../layout/index";
import { theme, mixins, media, Section } from "../styles/index";
import { PostListingBlog } from "../components/index";

const { colors } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  max-width: 90vw;
  padding: 40px;
  ${media.tablet`padding-top: 0px;`};
`;
const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
const StyledInput = styled.input`
  color: #b3b9c5;
  border: 2px solid #444;
  background: #333 !important;
  display: block;
  border-radius: 6px;
  padding: 0.4rem;
  outline: none;
  font-size: 1.1rem;
  font-weight: 500;
  width: 85%;
  max-width: 85%;
  line-height: 1;
`;
const StyledNoOfPost = styled.div`
  width: 60px;
  text-align: center;
  font-size: 1.4rem;
`;
const StyledTagsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  a {
    background-color: ${colors.darkerGray};
    padding: 10px 15px;
    margin-right: 0.5rem;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    padding-top: 15px;
    &:hover {
      background-color: #111;
    }
  }
`;

class BlogPage extends Component {
  state = {
    searchTerm: "",
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => this.filterPosts());
  };

  filterPosts = () => {
    const { posts, searchTerm } = this.state;

    const filteredPosts = posts.filter((post) =>
      post.node.frontmatter.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    this.setState({ filteredPosts });
  };

  render() {
    const { filteredPosts, searchTerm } = this.state;
    const filterCount = filteredPosts.length;
    const categories = this.props.data.categories.group;
    console.log(categories);

    return (
      <Layout>
        <StyledContainer>
          <StyledSearchContainer>
            <StyledInput
              type="text"
              name="searchTerm"
              value={searchTerm}
              placeholder="Search posts..."
              onChange={this.handleChange}
            />
            <StyledNoOfPost>{filterCount}</StyledNoOfPost>
          </StyledSearchContainer>
          <StyledTagsContainer>
            {categories.map((category) => {
              return (
                <Link
                  to={`/categories/${category.fieldValue.toLowerCase()}`}
                  className="category-filter"
                  key={category.fieldValue}
                >
                  {category.fieldValue}
                </Link>
              );
            })}
          </StyledTagsContainer>
          <PostListingBlog posts={filteredPosts} />
        </StyledContainer>
      </Layout>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 180)
          timeToRead
          frontmatter {
            title
            tags
            categories
            date
            template
            description
          }
        }
      }
    }
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
