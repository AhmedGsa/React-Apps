import React from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'
import reducer from './reducer'
import cartItems from './data'
import actions from './actions'
import { useEffect } from 'react'

const url = 'https://www.course-api.com/react-useReducer-cart-project';
const GlobalContext = React.createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const items = cartItems.map((item) => [item.id, item])
const defaultState = {cart: new Map(), isLoading: true}

const AppContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      const items = data.map((item) => [item.id, item])
      dispatch({type: actions.UPDATE_CART, items})
    }
    fetchData()
  }, [])
  const clearCart = () => {
    dispatch({type: actions.CLEAR_CART})
  }
  const removeItem = (id) => {
    dispatch({type: actions.REMOVE_ITEM, id})
  }
  const incAmount = (id) => {
    dispatch({type: actions.INC, id})
  }
  const decAmount = (id) => {
    dispatch({type: actions.DEC, id})
  }
  return (
    <GlobalContext.Provider value={{items: state.cart, clearCart, removeItem, incAmount, decAmount}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default AppContext