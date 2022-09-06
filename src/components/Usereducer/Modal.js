import React, {useEffect} from 'react'

const Modal = ({myName, closeModal}) => {
  
  useEffect(()=> {
    setTimeout(()=> {
      closeModal();
    },4000)
  })
  return (
    <div>
        <h2>{myName}</h2>
    </div>
  )
}

export default Modal