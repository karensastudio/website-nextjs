import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-slate-300' : 'text-slate-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-slate-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Karensa" invert={invert}>
          <a href='tel:09392676126' dir='ltr'>+98 939 267 6126</a>
          <br />
          Iran
        </Office>
      </li>
      <li>
        <Office name="PolyUnion" invert={invert}>
          <a href="tel:004915158781500" dir='ltr'>+49 1515 8781500</a>
          <br />
          United Kingdom
        </Office>
      </li>
    </ul>
  )
}
