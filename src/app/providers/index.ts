import { ComponentType } from 'react';

import { withLocale } from './withLocale';

export function withProviders(Component: ComponentType) {
  return [withLocale].reduceRight((Target, wrap) => wrap(Target), Component);
}
