import actions from './actions'
const reducer = (state, action) => {
    if(action.type === actions.CLEAR_CART) {
        state.cart.clear()
        return {...state, cart: state.cart}
    } else if(action.type === actions.REMOVE_ITEM) {
        state.cart.delete(action.id)
        return {...state, cart: state.cart}
    } else if(action.type === actions.INC) {
        const id = action.id;
        const element = state.cart.get(id)
        element.amount++
        state.cart.set(id, element)
        return {...state, cart: state.cart}
    } else if(action.type === actions.DEC) {
        const id = action.id;
        const element = state.cart.get(id)
        element.amount--
        state.cart.set(id, element)
        return {...state, cart: state.cart}
    } else if(action.type === actions.UPDATE_CART) {
        return {...state, cart: new Map(action.items)}
    }
    throw new Error(`${action.type} is not handled in reducer`)
}

export default reducer;