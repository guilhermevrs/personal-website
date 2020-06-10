// @flow
import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Author from "./Author";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";

import VersionSwitcher from "../VersionSwitcher";

type Props = {
  +isIndex: ?boolean,
  lang: ?string,
};

type PureProps = Props & {
  +data: Object,
};

export const PureSidebar = ({ data, isIndex, lang = null, versionLinkSuffix = '' }: PureProps) => {
  const { author, copyright, menu } = data.site.siteMetadata;

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Author author={author} isIndex={isIndex} />
        {versionLinkSuffix && <VersionSwitcher lang={lang} versionLinkSuffix={versionLinkSuffix}></VersionSwitcher>}
        <Menu menu={menu.filter((m) => m.lang === lang)} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export const Sidebar = (props: Props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            copyright
            menu {
              label
              path
              lang
            }
            author {
              name
              photo
              bio
              contacts {
                github
                linkedin
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureSidebar {...props} data={data} />}
  />
);

export default Sidebar;
