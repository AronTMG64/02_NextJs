import { ReactNode } from 'react';
import styles from './Hero.module.css'

type HeroProps = {
  children?: ReactNode;
};

export default function Hero({children}: HeroProps) {
  return (
    <div className={styles.hero}>
      {children}
    </div>
  );
};