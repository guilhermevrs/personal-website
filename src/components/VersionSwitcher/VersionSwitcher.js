import React from "react";
import { Link } from "gatsby";
import Flags from "../../assets/flags.svg";
import styles from "./VersionSwitcher.module.scss";

export const VersionSwitcher = ({ lang, versionLinkSuffix = "" }) => {
  const versionLink =
    !lang || lang === "en"
      ? { to: '/pt', text: "Ler em Português", icon: "#portugues" }
      : { to: '', text: "Read it in English", icon: "#english" };

  return (
    <>
      <Flags></Flags>
      <Link to={`${versionLink.to}${versionLinkSuffix}`}>
        <svg className={styles["svgIcon"]}>
          <use href={versionLink.icon}></use>
        </svg>{' '}
        <span>{versionLink.text}</span>
      </Link>
    </>
  );
};

export default VersionSwitcher;
