import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

const PageTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    title: pageTitle,
    description: pageDescription
  } = data.thisPost.frontmatter;

  const { html: pageBody } = data.thisPost;

  const { lang } = pageContext;
  const slug = data.otherLanguages ? data.otherLanguages.fields.slug : undefined;

  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar lang={lang} versionLinkSuffix={slug} />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!, $fileDirName: String!, $lang: String) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    thisPost: markdownRemark(fields: { slug: { eq: $slug } }, frontmatter: { lang: { eq: $lang } }) {
      id
      html
      frontmatter {
        title
        date
        description
        lang
      }
    }
    otherLanguages: markdownRemark(frontmatter: {lang: {ne: $lang}}, fileAbsolutePath: {glob: $fileDirName}) {
      id
      fields{
        slug
      }
    }
  }
`;

export default PageTemplate;
