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
        <Office name="PolyUnion" invert={invert}>
          Team building Agency
          <br />
          United Kingdom
        </Office>
      </li>
      {/* <li>
        <Office name="Billund" invert={invert}>
          24 Lego Allé
          <br />
          7190, Billund, Denmark
        </Office>
      </li> */}
    </ul>
  )
}
