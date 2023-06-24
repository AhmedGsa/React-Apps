import React, { useContext, useState } from 'react'

const GlobalContext = React.createContext();
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [value, setValue] = useState("Hello world")
  return (
    <GlobalContext.Provider value={{value}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default AppContext