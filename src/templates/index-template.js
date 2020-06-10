// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import NotFound from '../components/NotFound';

type Props = {
  +data: Object,
  +pageContext: Object,
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath,
    lang
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;
  let notFoundCmp;
  if (typeof window !== 'undefined') {
    if (/#404$/.test(window.location.hash)) {
      notFoundCmp = <NotFound />;
    }
  }

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex lang={lang} versionLinkSuffix="/" />
      <Page>
        {notFoundCmp}
        <Feed edges={edges} lang={lang} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
          lang={lang}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!, $lang: String) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true }, lang: { eq: $lang } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            lang
          }
          timeToRead
        }
      }
    }
  }
`;

export default IndexTemplate;
