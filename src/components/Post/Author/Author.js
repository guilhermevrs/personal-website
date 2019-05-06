// @flow
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';

export const PureAuthor = ({ data }: Object) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('email', author.contacts.email)}
          rel="noopener noreferrer"
          target="_blank"
        >
         Send <strong>{author.name}</strong> a mail
        </a>
      </p>
    </div>
  );
};

export const Author = () => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              contacts {
                email
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureAuthor data={data} />}
  />
);

export default Author;
