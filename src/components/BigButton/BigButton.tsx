import cn from 'classnames';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import styles from './styles.module.scss';

type HrefAttributes = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'children' | 'ref'
>;
type ButtonAttributes = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'children' | 'ref' | 'disabled'
>;

export type BigButtonProps = {
  appearance?: 'outline' | 'filled';
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
} & (HrefAttributes | ButtonAttributes);

const isHrefProps = (props: HrefAttributes | ButtonAttributes): props is HrefAttributes => 'href' in props;

export function BigButton({ label, className, disabled, icon, appearance = 'outline', ...props }: BigButtonProps) {
  const localProps = {
    'data-appearance': appearance,
    className: cn(styles.bigButton, className),
    'data-disabled': disabled ?? undefined,
    'data-has-icon': icon ? true : undefined,
  };

  const content = icon ? (
    <>
      {icon}
      <div>{label}</div>
    </>
  ) : (
    <div>{label}</div>
  );

  if (isHrefProps(props)) {
    return (
      <a {...props} {...localProps}>
        {content}
      </a>
    );
  }

  return (
    <button {...(props as ButtonAttributes)} disabled={disabled} {...localProps}>
      {content}
    </button>
  );
}
