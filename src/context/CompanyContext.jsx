import React, { createContext } from 'react'

 export const CompanyDataContext = createContext();

const CompanyContext = ({children}) => {
    const data=children
  return (
    <div>
        <CompanyDataContext.Provider value={'X company'}>
        {children }
        </CompanyDataContext.Provider>
    </div>
  )
}

export default CompanyContext