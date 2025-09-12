import { Typography } from '@snack-uikit/typography';

import {
  AlertDemo,
  AlertTopDemo,
  FieldDemo,
  HeaderDemo,
  StepperDemo,
  TableDemo,
  TabsDemo,
  ToggleDemo,
} from './components';
import styles from './styles.module.scss';

export function Preview() {
  return (
    <div className={styles.container}>
      <Typography.SansTitleM>Демонстрация элементов интерфейса</Typography.SansTitleM>

      <div className={styles.content}>
        <div className={styles.headline}>
          <AlertTopDemo />
          <HeaderDemo />
          <TabsDemo />
        </div>

        <TableDemo />

        <div className={styles.controls}>
          <FieldDemo />
          <ToggleDemo />
        </div>

        <StepperDemo />

        <AlertDemo />
      </div>
    </div>
  );
}
