'use strict';

const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js'),
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
              lang
            }
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    const fileDirName = `${path.dirname(_.get(edge, 'node.fileAbsolutePath'))}/*`;
    const lang = _.get(edge, 'node.frontmatter.lang');
    const thislang = lang ? `/${lang}` : '';
    const thisPath = `${thislang}${edge.node.fields.slug}`;
    if (_.get(edge, 'node.frontmatter.template') === 'page') {
      createPage({
        path: thisPath,
        component: path.resolve('./src/templates/page-template.js'),
        context: { 
          slug: edge.node.fields.slug, 
          lang,
          fileDirName
        },
      });
    } else if (_.get(edge, 'node.frontmatter.template') === 'post') {
      createPage({
        path: thisPath,
        component: path.resolve('./src/templates/post-template.js'),
        context: {
          slug: edge.node.fields.slug,
          lang,
          fileDirName
        },
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createTagsPages(graphql, actions, 'pt');
  await createCategoriesPages(graphql, actions);
  await createCategoriesPages(graphql, actions, 'pt');
  await createPostsPages(graphql, actions);
  await createPostsPages(graphql, actions, 'pt');
};

module.exports = createPages;
