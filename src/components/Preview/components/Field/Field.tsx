import { useState } from "react";

import { PlusSVG } from "@snack-uikit/icons";
import {
  ButtonOutline,
  ButtonTonal,
  ButtonTonalProps,
} from "@snack-uikit/button";
import { FieldDecorator, FieldSelect, FieldText } from "@snack-uikit/fields";

import styles from "./styles.module.scss";

const BUTTON_PROPS = {
  appearance: "primary" as ButtonTonalProps["appearance"],
  label: "Кнопка",
  icon: <PlusSVG />,
  size: "m" as ButtonTonalProps["size"],
};

const SELECT_OPTIONS = [
  {
    value: "op1",
    option: "Опция 1",
  },
  {
    value: "op2",
    option: "Опция 2",
  },
  {
    value: "op3",
    option: "Опция 3",
  },
];

export function FieldDemo() {
  const [value, setValue] = useState<string>("Текст");

  return (
    <div className={styles.block}>
      <FieldDecorator label="Поле ввода" size="m">
        <div className={styles.row}>
          <FieldText size="m" value={value} onChange={setValue} />
          <ButtonOutline {...BUTTON_PROPS} />
        </div>
      </FieldDecorator>

      <FieldDecorator label="Выбор из списка" size="m">
        <div className={styles.row}>
          <FieldSelect
            size="m"
            defaultValue={"op2"}
            selection="single"
            options={SELECT_OPTIONS}
          />
          <ButtonTonal {...BUTTON_PROPS} />
        </div>
      </FieldDecorator>
    </div>
  );
}
