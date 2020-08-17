import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
  lang = null
}) => {
  const prevClassName = cx({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !hasPrevPage
  });

  const nextClassName = cx({
    'pagination__next-link': true,
    'pagination__next-link--disable': !hasNextPage
  });

  const paginationLabels = lang ? PAGINATION[lang] : PAGINATION.default;

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        <Link rel="prev" to={prevPagePath} className={prevClassName}>{paginationLabels.PREV_PAGE}</Link>
      </div>
      <div className={styles['pagination__next']}>
        <Link rel="next" to={nextPagePath} className={nextClassName}>{paginationLabels.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;
