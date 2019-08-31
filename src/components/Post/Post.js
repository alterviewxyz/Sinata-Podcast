// @flow
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, castbox_embed, cover, anchor} = post.frontmatter;
  console.log(post.frontmatter);

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">بازگشت</Link>

      <div className={styles['post__content']}>
        <img className={styles['post__cover']} src={`/media/covers/${cover}/banner.jpg`} alt={title} />
        {/* <audio controls preload="metadata">
          <source src={`/audio/${cover}.mp3`} type="audio/mp3" />
        </audio> */}
        <iframe src={`https://anchor.fm/sinata/embed/episodes${anchor}`} height="100%" width="100%" frameborder="0" scrolling="no"></iframe>
        <Content body={html} title={title} castbox_embed={castbox_embed} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
