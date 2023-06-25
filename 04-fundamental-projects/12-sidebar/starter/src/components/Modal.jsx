import React from 'react'
import {GrClose} from 'react-icons/gr'
import { useGlobalContext } from '../Context'

const Modal = () => {
  const {closeModal} = useGlobalContext()
  return (
    <div className='modal-container'>
      <div className="modal-content">
        <h3>Modal Content</h3>
        <GrClose className='close-icon' onClick={closeModal}/>
      </div>
    </div>
  )
}

export default Modal