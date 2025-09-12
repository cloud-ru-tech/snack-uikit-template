import { Alert, AlertTop } from '@snack-uikit/alert';

const noop = () => {};

const COMMON_TEXTS = {
  title: 'Информационный баннер',
  description: 'Демонстрация оформления элементов интерфейса',
};

export function AlertTopDemo() {
  return (
    <AlertTop
      {...COMMON_TEXTS}
      appearance='primary'
      action={{
        text: 'Ясно',
        onClick: noop,
      }}
      onClose={noop}
    />
  );
}

export function AlertDemo() {
  return (
    <Alert
      {...COMMON_TEXTS}
      appearance='primary'
      onClose={noop}
      size='s'
      outline
      actions={{
        primary: {
          text: 'Скрыть',
          onClick: noop,
        },
        secondary: {
          text: 'Больше не показывать',
          onClick: noop,
        },
      }}
    />
  );
}
