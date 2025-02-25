import React, { useContext } from 'react'
import { CompanyDataContext } from '../context/CompanyContext'


const Navbar = () => {
  const [companyname,setCompanyName] = useContext(CompanyDataContext)
  const ChangeCompany=()=>{
    setCompanyName('Team X company')
  }
  return (
    <div className='px-6 py-4 flex justify-between text-xl w-full font-semibold items-center bg-gray-500 fixed top-0 left-0'>
        <h2>{companyname}</h2>
    <div className='flex gap-10'>
    <h2>About</h2>
    <h2>Home</h2>
    <h2>Contact</h2>
    <h2>Services</h2>
    <button 
    onClick={()=>{
      ChangeCompany()
    }}
    className='px-4 bg-blue-400 '>Change company</button>
    </div>
    </div>
  )
}

export default Navbar