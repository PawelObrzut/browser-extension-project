import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.svg?react';
import MoonIcon from '../assets/images/icon-moon.svg'
import SunIcon from '../assets/images/icon-sun.svg'

type Theme = "light" | "dark";

const Header = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    return savedTheme || "light";
  })

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: Theme) => (prev === 'light' ? 'dark' : 'light'))
  }
  return (
    <div className='header container flex space-between border-radius-1 margin-460 padding-460'>
      <Logo className='logo'/>
      <button
        onClick={toggleTheme}
        className='theme-icon border-radius-1'
      >
        {theme === "light" ? <img src={MoonIcon} /> : <img src={SunIcon} />}
      </button>
      
    </div>
  )
}

export default Header