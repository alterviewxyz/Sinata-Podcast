// @flow
import React from 'react';
import styles from './Icon.module.scss';

type Props = {
  icon: {
    viewBox?: string,
    path?: string,
    color?: string
  }
};

const Icon = ({ icon }: Props) => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <path d={icon.path}  fill={icon.color} />
  </svg>
);

export default Icon;
