import { ReactNode } from 'react';

import { Checkbox, Radio, Switch } from '@snack-uikit/toggles';
import { Typography } from '@snack-uikit/typography';

import styles from './styles.module.scss';

function Toggle({ children }: { children: ReactNode }) {
  return (
    <div className={styles.toggle}>
      <Typography.SansBodyM>Переключатель</Typography.SansBodyM>
      {children}
    </div>
  );
}

export function ToggleDemo() {
  return (
    <div className={styles.block}>
      <Toggle>
        <Checkbox id='checkbox' size='m' defaultChecked />
      </Toggle>

      <Toggle>
        <Radio id='radio' size='m' defaultChecked />
      </Toggle>

      <Toggle>
        <Switch id='switch' size='m' defaultChecked />
      </Toggle>
    </div>
  );
}
