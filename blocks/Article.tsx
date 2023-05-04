import React, { ReactNode } from 'react'
import styles from './Article.module.css'
import Hero from './Hero'

type ArticleProps = {
  children?: ReactNode;
  hero?: ReactNode;
};

export default function Article({children, hero}: ArticleProps) {
  return (
    <article className={styles.article}>
      <Hero>{hero}</Hero>
      <div>
        {children}
      </div>
    </article>
  );
};

