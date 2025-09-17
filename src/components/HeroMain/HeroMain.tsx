import { Typography } from '@snack-uikit/typography';

import { EXTERNAL_LINKS } from '#constants/links';

import { BigButton } from '../BigButton';
import { Hero } from '../Hero';
import { FigmaIcon } from './helperComponents/FigmaIcon';
import { GitHubIcon } from './helperComponents/GitHubIcon';
import { HeroImage } from './helperComponents/HeroImage';
import styles from './styles.module.scss';

export function HeroMain() {
  return (
    <>
      <Hero
        left={
          <div className={styles.left}>
            <div className={styles.text}>
              <Typography.SansDisplayL tag='h1'>{'Snack UI Kit'}</Typography.SansDisplayL>
              <Typography.SansBodyL>
                {'Open source library of components and tokens for rapid and consistent interface development.'}
              </Typography.SansBodyL>
            </div>
            <div className={styles.buttons}>
              <BigButton label={'Github'} href={EXTERNAL_LINKS.github} target='_blank' icon={<GitHubIcon />} />
              <BigButton label={'Figma'} href={EXTERNAL_LINKS.figma} target='_blank' icon={<FigmaIcon />} />
            </div>
          </div>
        }
        right={<HeroImage className={styles.heroImage} />}
      />
    </>
  );
}
