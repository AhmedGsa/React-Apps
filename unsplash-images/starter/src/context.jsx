import React, { useContext, useEffect, useState } from 'react'

const GlobalContext = React.createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const getInitialDarkMode = () => {
  const prefered = window.matchMedia("(prefers-color-scheme:dark)").matches
  return prefered
}

const AppContext = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  useEffect(() => {
    const bodyDOM = document.querySelector("body")
    bodyDOM.classList.toggle("dark-theme", isDarkTheme)
  }, [])
  const toggleDarkTheme = () => {
    const bodyDOM = document.querySelector("body")
    setIsDarkTheme(!isDarkTheme)
    bodyDOM.classList.toggle("dark-theme", !isDarkTheme)
  }
  return (
    <GlobalContext.Provider value={{isDarkTheme, toggleDarkTheme}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default AppContext