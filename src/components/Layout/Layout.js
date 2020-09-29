import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description, keywords }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="canonical" href="" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
    {children}
  </div>
);

export default Layout;
