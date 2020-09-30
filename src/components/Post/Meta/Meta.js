import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

import "../../../constants/moment-ptbr";

const Meta = ({ date, share, lang, lastUpdate }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>{lang ? 'Publicado em' : 'Published in'} {moment(date).locale(lang || 'en').format('D MMM YYYY')}</p>
    {lastUpdate && <p className={styles['meta__date']}>{lang ? 'Última atualização em' : 'Last update in'} {moment(lastUpdate).locale(lang || 'en').format('D MMM YYYY')}</p>}
    <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: {lang ? 'pt_BR' : 'en_US'}</script>
    <script type="IN/Share" data-url={share}></script>
  </div>
);

export default Meta;
