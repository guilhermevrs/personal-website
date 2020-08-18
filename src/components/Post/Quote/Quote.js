import React from "react";

import styles from './Quote.module.scss';

const Quote = (props) => {
  return <blockquote className={styles['quote']}>{props.children}</blockquote>;
};

export default Quote;
