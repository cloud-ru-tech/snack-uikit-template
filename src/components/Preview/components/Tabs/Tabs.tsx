import { PlusSVG } from "@snack-uikit/icons";
import { ButtonFilled } from "@snack-uikit/button";
import { Tabs } from "@snack-uikit/tabs";

import styles from "./styles.module.scss";

export function TabsDemo() {
  return (
    <Tabs defaultValue="1">
      <Tabs.TabBar
        className={styles.tabBar}
        after={
          <ButtonFilled
            className={styles.after}
            label="Кнопка"
            icon={<PlusSVG />}
          />
        }
      >
        <Tabs.Tab label="Вкладка 1" value="1" />
        <Tabs.Tab label="Вкладка 2" value="2" />
        <Tabs.Tab label="Вкладка 3" value="3" />
      </Tabs.TabBar>
    </Tabs>
  );
}
