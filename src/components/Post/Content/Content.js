import React from 'react';
import styles from './Content.module.scss';

const pluralizedTime = (lang, minutes) => {
  const singular = lang === 'pt'? 'minuto' : 'minute';
  const plural = lang === 'pt'? 'minutos' : 'minutes';
  const readingTime = lang === 'pt'? 'Tempo de leitura:' : 'Reading time:';
  return `${readingTime} ${minutes} ${minutes > 1 ? plural : singular}`;
};

const Content = ({ body, title, timeToRead, lang }) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <p className={styles['content__meta']}>{pluralizedTime(lang, timeToRead)}</p>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
