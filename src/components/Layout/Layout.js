import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Guilherme Schwade development management leadership skills effective managing expertise time strategies" />
    </Helmet>
    {children}
  </div>
);

export default Layout;
