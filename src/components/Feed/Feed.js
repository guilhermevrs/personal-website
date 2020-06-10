import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import styles from "./Feed.module.scss";

import "../../constants/moment-ptbr";

const pluralizedTime = (lang, minutes) => {
  const singular = lang === 'pt'? 'minuto' : 'minute';
  const plural = lang === 'pt'? 'minutos' : 'minutes';
  return `${minutes} ${minutes > 1 ? plural : singular}`;
};

const Feed = ({ edges, lang = null }) => (
  <div className={styles["feed"]}>
    {edges.map((edge) => {
      const isEnglish = (!lang || lang === 'en');
      const linkSlug = isEnglish ? edge.node.fields.slug : `/${lang}${edge.node.fields.slug}`;

      const locale = isEnglish ? 'en' : 'pt-br';
      return (
        <div className={styles["feed__item"]} key={edge.node.fields.slug}>
          <div className={styles["feed__item-meta"]}>
            <time
              className={styles["feed__item-meta-time"]}
              dateTime={moment(edge.node.frontmatter.date).locale(locale).format(
                "MMMM D, YYYY"
              )}
            >
              {moment(edge.node.frontmatter.date).locale(locale).format("MMMM YYYY")}
            </time>
            <span className={styles["feed__item-meta-divider"]} />
            <span className={styles["feed__item-meta-category"]}>
              <Link
                to={edge.node.fields.categorySlug}
                className={styles["feed__item-meta-category-link"]}
              >
                {edge.node.frontmatter.category}
              </Link>
            </span>
          </div>
          <h2 className={styles["feed__item-title"]}>
            <Link
              className={styles["feed__item-title-link"]}
              to={linkSlug}
            >
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles["feed__item-timeToRead"]}>
            {pluralizedTime(lang, edge.node.timeToRead)}
          </p>
          <p className={styles["feed__item-description"]}>
            {edge.node.frontmatter.description}
          </p>
          <Link
            className={styles["feed__item-readmore"]}
            to={linkSlug}
          >
            {isEnglish ? 'Read' : 'Ler'}
          </Link>
        </div>
      );
    })}
  </div>
);

export default Feed;
