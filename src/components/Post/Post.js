import React from "react";
import { Link } from "gatsby";
import Author from "./Author";
import Content from "./Content";
import Meta from "./Meta";
import VersionSwitcher from "../VersionSwitcher";
import styles from "./Post.module.scss";

const Post = ({ post, url, otherLanguages = null }) => {
  const { title, date, lang = null, lastUpdate = null } = post.frontmatter;

  const { body } = post;
  const slug = otherLanguages ? otherLanguages.fields.slug : null;

  const allArticlesProp = lang
    ? { to: `/${lang}`, text: "Lista de Artigos" }
    : { to: "/", text: "All Articles" };

  return (
    <div className={styles["post"]}>
      {slug && <div className={styles["versionSwitch"]}>
        <VersionSwitcher lang={lang} versionLinkSuffix={slug}></VersionSwitcher>
      </div>}
      <Link className={styles["post__home-button"]} to={allArticlesProp.to}>
        {allArticlesProp.text}
      </Link>

      <div className={styles["post__content"]}>
        <Content body={body} title={title} timeToRead={post.timeToRead} lang={lang} />
      </div>

      <div className={styles["post__footer"]}>
        <Meta date={date} lang={lang} share={`${url}${post.fields.slug}`} lastUpdate={lastUpdate} />
        <Author lang={lang} />
      </div>
    </div>
  );
};

export default Post;
