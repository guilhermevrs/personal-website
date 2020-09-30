import React from "react";
import moment from "moment";
import styles from "./Meta.module.scss";
import "./Meta.scss";

import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

import "../../../constants/moment-ptbr";

const Meta = ({ title, date, share, lang, lastUpdate }) => (
  <div className={styles["meta"]}>
    <p className={styles["meta__date"]}>
      {lang ? "Publicado em" : "Published in"}{" "}
      {moment(date)
        .locale(lang || "en")
        .format("D MMM YYYY")}
    </p>
    {lastUpdate && (
      <p className={styles["meta__date"]}>
        {lang ? "Última atualização em" : "Last update in"}{" "}
        {moment(lastUpdate)
          .locale(lang || "en")
          .format("D MMM YYYY")}
      </p>
    )}

    <div>
      <TwitterShareButton
        url={share}
        title={title}
        via="guilhermevrs"
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={share}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <RedditShareButton url={share} title={title}>
        <RedditIcon size={40} round={true} />
      </RedditShareButton>
    </div>
  </div>
);

export default Meta;
