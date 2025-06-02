import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Extension from './components/Extension'


function App() {
  const [activeButton, setActiveButton] = useState<string>('All')

  const handleButtonClick = (label: string) => {
    setActiveButton(label)
  }
  
  return (
    <>
      <Header/>
      <main className='extensionsList container margin-460'>
        <div className='flex space-between align-center container'>
          <h1>Extensions List</h1>
          <div className='flex'>
            <Button 
              label="All" 
              active={activeButton === 'All'}
              onClick={() => handleButtonClick('All')} 
            />
            <Button 
              label="Active" 
              active={activeButton === 'Active'}
              onClick={() => handleButtonClick('Active')} 
            />
            <Button 
              label="Inactive" 
              active={activeButton === 'Inactive'}
              onClick={() => handleButtonClick('Inactive')} 
            />
          </div>
        </div>
        <ul className='container'>
          <Extension />
        </ul>
      </main>
    </>
  )
}

export default App
