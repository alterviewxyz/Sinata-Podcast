// @flow
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  cover: string,
  castboxEmbed: string,
  youtube: string,
  anchor: string
};

const Content = ({ body, title, cover, youtube, anchor }: Props) => (
  <div className={styles['content']}>
    <div className={styles['content__card']}>
      <span className={styles['content__cardtitle']}>پادکست</span>
      <img
        className={styles['content__cover']}
        src={`/media/covers/${cover}/banner.jpg`}
        alt={title}
      />
      {/* <audio controls preload="metadata">
          <source src={`/audio/${cover}.mp3`} type="audio/mp3" />
        </audio> */}
      <iframe
        src={`https://anchor.fm/sinata/embed/episodes${anchor}`}
        height="100%"
        style={{
          height: '100px'
        }}
        width="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>

    <div className={styles['content__card']}>
      <span className={styles['content__cardtitle']}>وادکست</span>
      {youtube && (
        <iframe
          width="560"
          height="315"
          src={youtube}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>

    <div className={styles['content__card']}>
      <span className={styles['content__cardtitle']}>متن قسمت</span>
      <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
    {/* <iframe src={`${castbox}?v=8.3.0&autoplay=0&hide_list=1`} frameborder="0" width="100%" height="200"></iframe> */}
  </div>
);

export default Content;
