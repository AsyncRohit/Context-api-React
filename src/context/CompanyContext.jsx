import React, { createContext, useState } from 'react'

 export const CompanyDataContext = createContext();

const CompanyContext = ({children}) => {
    const data=children
const [companyname, setCompanyName] = useState('Rohit')
    return (
    <div>
        <CompanyDataContext.Provider value={[companyname,setCompanyName]}>
        {children }
        </CompanyDataContext.Provider>
    </div>
  )
}

export default CompanyContext