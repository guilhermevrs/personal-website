import React from "react";
import { Link } from "gatsby";
import Author from "./Author";
import Content from "./Content";
import Meta from "./Meta";
import Tags from "./Tags";
import VersionSwitcher from "../VersionSwitcher";
import styles from "./Post.module.scss";

const Post = ({ post, otherLanguages = null }) => {
  const { tags, title, date, lang = null, lastUpdate = null } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;
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
        <Content body={html} title={title} timeToRead={post.timeToRead} lang={lang} />
      </div>

      <div className={styles["post__footer"]}>
        <Meta date={date} lang={lang} lastUpdate={lastUpdate} />
        <Tags tags={tags} tagSlugs={tagSlugs} lang={lang} />
        <Author lang={lang} />
      </div>
    </div>
  );
};

export default Post;
