import clsx from 'clsx'

export function Border({
  as,
  className,
  position = 'top',
  invert = false,
  ...props
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'before:bg-white after:bg-white/10'
          : 'before:bg-slate-950 after:bg-slate-950/10',
        position === 'top' &&
          'before:right-0 before:top-0 before:h-px before:w-6 after:right-8 after:left-0 after:top-0 after:h-px',
        position === 'left' &&
          'before:-right-8 before:top-0 before:h-6 before:w-px after:bottom-0 after:-right-8 after:top-8 after:w-px',
      )}
      {...props}
    />
  )
}
