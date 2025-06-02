import React from 'react'

type Props = {
  label: string,
  active: boolean,
  onClick: () => void
}

const Button = (button: Props) => {
  return (
    <button
      aria-selected={button.active}
      className='button border-radius-1'
      onClick={button.onClick}
    >
      {button.label}
    </button>
  )
}

export default Button