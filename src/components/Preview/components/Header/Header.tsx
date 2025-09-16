import { Avatar } from '@snack-uikit/avatar';
import { Breadcrumbs } from '@snack-uikit/breadcrumbs';
import { ButtonFunction } from '@snack-uikit/button';
import { HomeSVG, SettingsSVG } from '@snack-uikit/icons';

import styles from './styles.module.scss';

const BREADCRUMBS_ITEMS = [
  {
    label: 'Evolution',
    id: 'evo',
  },
  {
    label: 'Service X',
    id: 'service',
  },
];

export function HeaderDemo() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <ButtonFunction icon={<HomeSVG />} size='m' />
      </div>

      <div className={styles.select}>
        <span className={styles.title}>Main</span>
      </div>

      <div className={styles.crumbs}>
        <Breadcrumbs separator='/' items={BREADCRUMBS_ITEMS} />
      </div>

      <div className={styles.right}>
        <ButtonFunction
          icon={<SettingsSVG />}
          size='m'
          counter={{
            value: 1,
            appearance: 'primary',
          }}
        />
        <Avatar name='Ivanov Van' size='xs' showTwoSymbols indicator='primary' />
      </div>
    </div>
  );
}
