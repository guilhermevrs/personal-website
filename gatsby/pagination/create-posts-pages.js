"use strict";

const path = require("path");
const siteConfig = require("../../config.js");

module.exports = async (graphql, actions, lang = null) => {
  const { createPage } = actions;
  const thisLangPath = lang ? `/${lang}` : '';

  const result = await graphql(
    `
    query indexQuery($lang: String) {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            template: { eq: "post" }
            draft: { ne: true }
            lang: { eq: $lang }
          }
        }
      ) {
        totalCount
      }
    }
  `,
    { lang }
  );

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(
    result.data.allMarkdownRemark.totalCount / postsPerPage
  );

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? `${thisLangPath}/` : `${thisLangPath}/page/${i}`,
      component: path.resolve("./src/templates/index-template.js"),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath:
          i <= 1 ? `${thisLangPath}/` : `${thisLangPath}/page/${i - 1}`,
        nextPagePath: `${thisLangPath}/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1,
        lang,
      },
    });
  }
};
