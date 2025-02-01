import React,{useState} from 'react'
import QRCode from 'react-qr-code';
function QrCodeGenerator() {
    const [input , setInput]=useState("");
    const [qrCode , setQrCode]=useState("");
    const handleQrCode=()=>{
        setQrCode(input);
        setInput("");
    }
  return (
    <div className="flex justify-center items-center flex-col my-8">
     <div className="bg-slate-100 my-2 flex gap-3">
        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} name="qr-code" className="bg-slate-50 border-2  border-black"/>
        <button  className="px-2 bg-slate-500 rounded-lg" onClick={handleQrCode}>Generate</button>
    </div>
    <div className="bg-white">
        <QRCode id="qr-code" value={qrCode}/>
    </div>
    </div>
   
  )
}

export default QrCodeGenerator


