import { reducerActionTypes } from "./actions";
import { data } from "../../../data";

export const reducer = (state, action) => {
    if(action.type === reducerActionTypes.CLEAR_LIST) {
      return {...state, people: []}
    } else if(action.type === reducerActionTypes.RESET_LIST) {
      return {...state, people: data}
    } else if(action.type === reducerActionTypes.REMOVE_ITEM) {
      let newPeople = state.people.filter((person) => person.id !== action.id);
      return {...state, people: newPeople}
    }
    throw new Error(`${action.type} is not handled !`)
}