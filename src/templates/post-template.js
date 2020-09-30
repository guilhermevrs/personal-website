import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';

const PostTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    title: postTitle,
    description: postDescription,
    keywords: postKeywords,
    lang
  } = data.thisPost.frontmatter;

  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} lang={lang} description={metaDescription} keywords={postKeywords}>
      <Post post={data.thisPost} url={data.site.siteMetadata.url} otherLanguages={data.otherLanguages} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!, $fileDirName: String!, $lang: String) {
    site {
      siteMetadata {
        author {
          name
        }
        disqusShortname
        subtitle
        title
        url
      }
    }
    thisPost: mdx(fields: { slug: { eq: $slug } }, frontmatter: { lang: { eq: $lang } }) {
      id
      body
      fields {
        slug
        tagSlugs
      }
      timeToRead
      frontmatter {
        date
        lastUpdate
        description
        tags
        title
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

export default PostTemplate;
