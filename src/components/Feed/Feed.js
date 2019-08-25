// @flow
import React, { useEffect, useState } from 'react';
import moment from 'moment-jalaali';
moment.loadPersian({usePersianDigits: true});
import { Link } from 'gatsby';
// import { Howl, Howler } from 'howler';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => { 


  // const [mp3, setMp3] = useState('07');
  // const [sound, setSound] = useState(new Howl({ src: []}));

  // useEffect(() => {
  //   setSound(new Howl({
  //     src: [`http://localhost:8000/audio/${mp3}.mp3`],
  //     autoplay: false,
  //     onload: () => {
  //       console.log('Loaded!');
  //     },
  //     onend: () => {
  //       console.log('Finished!');
  //     },
  //     onloaderror: () => {
  //       console.log('Fuck!');
  //     }
  //   }));
  // }, [mp3])

  // sound.play();

  
  return (
    <div className={styles['feed']}>
      {edges.map((edge) => (
        <div key={edge.node.fields.slug}>
          <div className={styles['feed__item']}>
            <div className={styles['feed__item-part']}>
            <div className={styles['feed__item-meta']}>
                <div className={styles['feed__item-meta-category']}>
                  {/* <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>  */}
                  {/* // fixme */}
                  <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>
                    <div className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.number}</div>
                  </Link>
                </div >
                {/* TODO: show it on mobile */}
                <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
                  {moment(edge.node.frontmatter.date).format('jMMMM jYY')}
                </time>
              </div>
            </div>
            <div className={styles['feed__item-part']}>
              <img src={`/media/covers/${edge.node.frontmatter.cover}/cover.jpg`}/>
            </div>
            <div className={styles['feed__item-part']}>
              <h2 className={styles['feed__item-title']}>
                <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
              </h2>
              <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
              {/* <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>مشاهده</Link> */}
            </div>
          </div>
          <div className={styles['feed__item-part']}>
            <audio controls preload="metadata">
              <source src={`/audio/${edge.node.frontmatter.cover}.mp3`} type="audio/mp3" />
            </audio>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Feed;
