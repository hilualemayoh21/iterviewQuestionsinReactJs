import React from 'react'

function Modal({id ,header, body , footer , onClose}) {
    
  return (
    <div className="cursor-pointer fixed top-0 left-0 py-20 z-index w-full h-full bg-lime-400 text-center text-white  flex items-center justify-center" id={id ? id :"modal"}>
        <div className="mx-auto p-0  relative w-[80%]">
          <div className="bg-green-600 h-12 text-2xl p-2">
            <span onClick={onClose} className="float-right text-[42px]  px-6">&times;</span>
            {header ? header : "header"}
          </div>
          <div className="text-xl h-[100px]  bg-white p-6  text-lime-400">
            {body ? body : "body"}
          </div>
          <div className="text-2xl p-2 bg-green-600 ">
            {footer ? footer : "footer"}
          </div>
        </div>
    </div>
  );
}

export default Modal