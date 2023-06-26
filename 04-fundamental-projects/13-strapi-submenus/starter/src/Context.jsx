import React, { useContext, useState } from 'react'

const GlobalContext = React.createContext()
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null)
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
  return (
    <GlobalContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default AppContext