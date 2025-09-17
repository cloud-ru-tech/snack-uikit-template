import { ReactNode } from 'react';

import { Section } from '../Section';
import styles from './styles.module.scss';

type HeroProps = {
  left: ReactNode;
  right: ReactNode;
};

export function Hero({ left, right }: HeroProps) {
  return (
    <div className={styles.wrapper}>
      <Section className={styles.section}>
        <div className={styles.left}>{left}</div>
        <div className={styles.right}>{right}</div>
      </Section>
    </div>
  );
}
