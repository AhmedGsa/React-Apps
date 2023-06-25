import React, { useContext, useState } from 'react'

export const GlobalContext = React.createContext()
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <GlobalContext.Provider value={{isModalOpen, isSidebarOpen, openModal, openSidebar, closeModal, closeSidebar}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default AppContext