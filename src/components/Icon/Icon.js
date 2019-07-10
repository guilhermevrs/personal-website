import React from 'react';
import styles from './Icon.module.scss';

const Icon = ({ icon }) => {
  let className = styles['icon'];
  if (icon.isLinkedin) {
    className = `${className} ${styles['icon_linkedin']}`;
  }
  return (
    <svg className={className} viewBox={icon.viewBox}>
      <rect x="35" y="31" width="8" height="8"/>
      <rect x="35" y="49" width="8" height="40"/>
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;
