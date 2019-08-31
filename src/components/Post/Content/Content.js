// @flow
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  castbox_embed: string
};

const Content = ({ body, title, castbox_embed}: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
    {/* <iframe src={`${castbox_embed}?v=8.3.0&autoplay=0&hide_list=1`} frameborder="0" width="100%" height="200"></iframe> */}
  </div>
);

export default Content;
