import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { reducerActionTypes } from './actions';

const defaultState = {
  people: data,
  isLoading: true
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const removeItem = (id) => {
    dispatch({type: reducerActionTypes.REMOVE_ITEM, id})
  };

  const clearList = () => {
    dispatch({type: reducerActionTypes.CLEAR_LIST})
  }

  const resetList = () => {
    dispatch({type: reducerActionTypes.RESET_LIST})
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={state.people.length !== 0 ?  () => clearList() : () => resetList()}
      >
        {state.people.length !== 0 ? "Clear items" : "Reset"}
      </button>
    </div>
  );
};

export default ReducerBasics;
