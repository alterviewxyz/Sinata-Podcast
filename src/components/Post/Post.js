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
  const { tags, title, date, castbox_embed, cover, anchor, youtube } = post.frontmatter;
  console.log({ youtube });

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        بازگشت
      </Link>

      <div className={styles['post__content']}>
        <h1 className={styles['post__title']}>{title}</h1>
        <Content
          body={html}
          title={cover}
          cover={cover}
          castboxEmbed={castbox_embed}
          youtube={youtube}
          anchor={anchor}
        />
      </div>

      <div className={styles['post__footer']}>
        {/* <Meta date={date} /> */}
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        {/* <Author /> */}
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
