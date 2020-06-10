// @flow
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styles from './Author.module.scss';

export const PureAuthor = ({ data, lang }: Object) => {
  const { author } = data.site.siteMetadata;

  const disclaimer = lang === 'pt' ?
    `Aviso: as opiniões que expresso no meu blog pessoal são apenas isso: opiniões pessoais. Elas não são endossadas pelo meu empregador ou por qualquer outra pessoa.` :
    `Disclaimer: the views I express in my personal blog are just that: personal. They aren’t endorsed by my employer or anyone else for that matter.`;

  return (
    <>
      <div className={styles['author']}>
        <p className={styles['author__bio']}>{disclaimer}</p>
      </div>
      <div className={styles['author']}>
        <p className={styles['author__bio']}>
          {author.bio}
        </p>
      </div>
    </>
  );
};

export const Author = ({lang}) => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
            }
          }
        }
      }
    `}
    render={(data) => <PureAuthor data={data} lang={lang} />}
  />
);

export default Author;
