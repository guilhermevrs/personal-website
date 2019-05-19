import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => (
    <div className={styles['not-found']}>
        <h1 className={styles['not-found__title']}>Oops!</h1>
        <p className={styles['not-found__body']}>
        I couldn't find the article your looking for.<br/>
        Perhaps take a look at the latest ones below
        </p>
    </div>
);

export default NotFound;