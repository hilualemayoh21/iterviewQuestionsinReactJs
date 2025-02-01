import React,{useState} from 'react'
import Modal from "./Modal"
function ModalTest() {
  const [showModal , setShowModal] =useState(false);
         
  const handleShowModal =()=>{
    setShowModal(!showModal);
  }
  const handleClose =()=>{
    setShowModal(false);
  }
  return (
    <div className="flex justify-center items-center">
        <button onClick={handleShowModal} className="cursor-pointer">open the modal</button>
        {
            showModal && <Modal header={<div>customize header</div>}  body={<div>customize body</div>} footer={<div>customize footer</div>} onClose={handleClose}/>
        }
    </div>
  )
}

export default ModalTest