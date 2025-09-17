const pathProps = {
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export function FigmaIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path d='M12 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0' {...pathProps} />
      <path d='M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 0 6H9a3 3 0 0 1-3-3' {...pathProps} />
      <path d='M9 9a3 3 0 1 0 0 6m0 0h3m-3 0a3 3 0 1 0 3 3V3' {...pathProps} />
    </svg>
  );
}
