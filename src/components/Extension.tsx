import React from 'react'

type Props = {
  logo: string,
  name: string,
  description: string,
  isActive: boolean,
  // onClick: () => void,
  onToggleActive: () => void,
}

const Extension = ({ logo, name, description, isActive, onToggleActive }: Props) => {
  return (
    <li className='extension flex border-radius-1'>
      <div className='flex'>
          <img src={logo} alt={name} className='extensionIconImg' />
        <section>
          <h3>{name}</h3>
          <p>{description}</p>
        </section>
      </div>
      <div className='flex space-between margin-top'>
        <button className='removeButton border-radius-2'>Remove</button>
        <label className='switch'>
          <input type='checkbox' checked={isActive} onChange={onToggleActive} />
          <span className='slider round'></span>
        </label>
      </div>
    </li>
  )
}

export default Extension