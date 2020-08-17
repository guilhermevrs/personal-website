import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const CategoryTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    category,
    normalizedCategory,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
    lang
  } = pageContext;

  const { edges } = data.allMdx;
  const pageTitle = currentPage > 0 ? `${category} - Page ${currentPage} - ${siteTitle}` : `${category} - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar lang={lang} versionLinkSuffix={`/category/${normalizedCategory}`} />
      <Page title={category}>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!, $lang: String) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMdx(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { category: { eq: $category }, template: { eq: "post" }, draft: { ne: true }, lang: { eq: $lang } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            categorySlug
            slug
          }
          frontmatter {
            date
            description
            category
            title
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
