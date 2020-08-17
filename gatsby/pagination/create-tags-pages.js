'use strict';

const _ = require('lodash');
const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions, lang) => {
  const { createPage } = actions;
  const { postsPerPage } = siteConfig;

  const result = await graphql(`
    query tagQuery($lang: String) {
      allMdx(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true }, lang: { eq: $lang } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `, { lang });

  _.each(result.data.allMdx.group, (tag) => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage);
    const normalizedTag = _.kebabCase(tag.fieldValue);
    const langPath = lang ? `/${lang}` : '';
    const tagSlug = `${langPath}/tag/${normalizedTag}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? tagSlug : `${tagSlug}/page/${i}`,
        component: path.resolve('./src/templates/tag-template.js'),
        context: {
          tag: tag.fieldValue,
          normalizedTag,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
          nextPagePath: `${tagSlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
          lang
        }
      });
    }
  });
};
