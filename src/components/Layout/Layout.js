import React from "react";
import Helmet from "react-helmet";
import styles from "./Layout.module.scss";

const Layout = ({ children, ogMeta, title, description, keywords }) => {
  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      {ogMeta && <Helmet>
        <meta property='og:title' content={ogMeta.title}/>
        <meta property='og:image' content={`${ogMeta.siteUrl}/${ogMeta.image}`}/>
        <meta property='og:description' content={ogMeta.description}/>
        <meta property='og:url' content={`${ogMeta.siteUrl}/${ogMeta.slug}`}/>
      </Helmet> }

      {children}
    </div>
  );
};

export default Layout;
