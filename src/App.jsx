import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import {CompanyDataContext} from './context/CompanyContext'

const App = () => {
  const data= useContext(CompanyDataContext);
  console.log(data);
  return (
    <div className='h-screen w-full'>
<Navbar />
<h1 className='text-red-500'>{data}</h1>
    </div>
  )
}

export default App