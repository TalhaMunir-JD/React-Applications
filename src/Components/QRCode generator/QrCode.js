import { useState } from "react"
import QRCode from 'react-qr-code';

function QrCode(){
    const[input, setInput] = useState("")
    const[Qr, setQr] = useState("")

    const handleSubmit = () => {
        setQr(input)
        console.log(input)
        setInput("")
    }

    return(
        <div>
            <div style={{ margin:'30px'}}>
                <input type="text" name="qrcodeinput" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button disabled={input && input.trim() !== '' ? false : true} onClick={handleSubmit}>Generate QR</button>
            </div>
            <div>
                <QRCode id="qr-code" value={Qr} size={400} />
            </div>
        </div>
    )    
}

export default QrCode;