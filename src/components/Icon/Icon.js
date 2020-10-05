import React from 'react';
import styles from './Icon.module.scss';

const Icon = ({ icon }) => {
  let className = styles['icon'];
  if (icon.isLinkedin) {
    className = `${className} ${styles['icon_linkedin']}`;
  }
  return (
    <svg className={className} viewBox={icon.viewBox}>
      {icon.paths ? icon.paths.map((path) => <path d={path} />) : <path d={icon.path} />}
    </svg>
  );
};

export default Icon;
