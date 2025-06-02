import React from 'react'
import devLens from '../assets/images/logo-devlens.svg'

const Extension = () => {
  return (
    <li className='extension flex border-radius-1'>
      <div className='flex'>
          <img src={devLens} alt="devLens" className='extensionIconImg' />

        <section>
          <h3>DevLens</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis quibusdam!</p>
        </section>
      </div>
      <div className='flex space-between margin-top'>
        <button className='removeButton border-radius-2'>Remove</button>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </li>
  )
}

export default Extension