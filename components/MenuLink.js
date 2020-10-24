import Link from 'next/link'

const transistionStyles = [
  'transition',
  'duration-500',
  'ease-in-out'
]

const buttonStyles = [
  ...transistionStyles,
  'inline-block',
  'border',
  'border-white',
  'rounded',
  'text-black',
  'hover:border-ids-orange',
  'hover:text-white',
  'hover:bg-ids-orange',
  'py-1',
  'px-3'
]

function MenuLink ({ data }) {
  return (
    <li className='mr-3'>
      <Link href={data.link}>
        <a href='#' className={buttonStyles.join(' ').toString()}>{data.name}</a>
      </Link>
    </li>
  )
}

export default MenuLink