import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

import { MDXRenderer } from "gatsby-plugin-mdx";

const PageTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    url: siteUrl
  } = data.site.siteMetadata;

  const {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords
  } = data.thisPost.frontmatter;

  const { lang } = pageContext;
  const slug = data.otherLanguages ? data.otherLanguages.fields.slug : undefined;

  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  const openGraphMeta = {
    title: `${pageTitle} - ${siteTitle}`,
    siteUrl,
    description: metaDescription,
    slug: data.thisPost.fields.slug,
    image: 'about.jpeg'
  };

  return (
    <Layout ogMeta={openGraphMeta} title={`${pageTitle} - ${siteTitle}`} keywords={pageKeywords} description={metaDescription}>
      <Sidebar lang={lang} versionLinkSuffix={slug} />
      <Page title={pageTitle}>
        <MDXRenderer>{data.thisPost.body}</MDXRenderer>
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
        url
      }
    }
    thisPost: mdx(fields: { slug: { eq: $slug } }, frontmatter: { lang: { eq: $lang } }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
        lang
        keywords
      }
    }
    otherLanguages: mdx(frontmatter: {lang: {ne: $lang}}, fileAbsolutePath: {glob: $fileDirName}) {
      id
      fields{
        slug
      }
    }
  }
`;

export default PageTemplate;
