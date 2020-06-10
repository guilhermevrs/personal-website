import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

import "../../../constants/moment-ptbr";

const Meta = ({ date, lang, lastUpdate }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>{lang ? 'Publicado em' : 'Published in'} {moment(date).locale(lang || 'en').format('D MMM YYYY')}</p>
    {lastUpdate && <p className={styles['meta__date']}>{lang ? 'Última atualização em' : 'Last update in'} {moment(lastUpdate).locale(lang || 'en').format('D MMM YYYY')}</p>}
  </div>
);

export default Meta;
