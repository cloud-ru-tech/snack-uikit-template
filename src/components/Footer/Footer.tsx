import { Typography } from '@snack-uikit/typography';

import { Section } from '../Section';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Section>
        <div className={styles.content}>
          <Typography.SansDisplayS>{'License'}</Typography.SansDisplayS>
          <Typography.SansBodyL>
            {'Snack UI Kit is distributed under the Apache-2.0 license. Use, develop, and share with the community!'}
          </Typography.SansBodyL>
        </div>
      </Section>
    </footer>
  );
}
