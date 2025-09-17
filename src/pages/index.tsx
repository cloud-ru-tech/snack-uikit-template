import { Footer } from '#components/Footer';
import { Header } from '#components/Header';
import { HeroMain } from '#components/HeroMain';
import { Instructions } from '#components/Instructions';

import styles from './styles.module.scss';

export function Pages() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <HeroMain />
      <Instructions />
      <Footer />
    </div>
  );
}
