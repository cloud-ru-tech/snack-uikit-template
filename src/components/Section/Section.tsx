import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './styles.module.scss';

type SectionProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Section({ className, ...props }: SectionProps) {
  return <section {...props} className={cn(styles.section, className)} />;
}
