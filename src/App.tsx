import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Extension from './components/Extension'
import extensionsData from './data.json'
const logos = import.meta.glob('./assets/images/*.svg', { eager: true, as: 'url' });

function App() {
  const [activeButton, setActiveButton] = useState<string>('All')
  const [extensions, setExtensions] = useState(extensionsData)

  const handleButtonClick = (label: string) => {
    setActiveButton(label)
  }

  const handleToggleActive = (name: string) => {
    const updatedExtensions = extensions.map(ext => 
      ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
    );
    setExtensions(updatedExtensions);
  }

  const handleDeleteExtension = (name: string) => {
    const updatedExtensions = extensions.filter(ext => ext.name !== name);
    setExtensions(updatedExtensions);
  }

  return (
    <>
      <Header/>
      <main className='extensionsList container margin-460'>
        <div className='filterMenu flex space-between align-center container'>
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
        <ul className='extensionsList container grid'>
          {
            extensions
            .filter((extension) => {
              if (activeButton === 'All') return true;
              if (activeButton === 'Active') return extension.isActive;
              if (activeButton === 'Inactive') return !extension.isActive;
            })
            .map(extension => (
            <Extension 
              key={extension.name}
              logo={logos[`./assets/images/${extension.logo.split('/').pop()}`]}
              name={extension.name} 
              description={extension.description}
              isActive={extension.isActive}
              onToggleActive={() => handleToggleActive(extension.name)}
              onDelete={() => handleDeleteExtension(extension.name)}
            />
          ))
          }
        </ul>
      </main>´
    </>
  )
}

export default App
