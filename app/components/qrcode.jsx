import QRCode from "qrcode";
import { Buffer } from 'buffer';


export default function Qrcode({ value }) {
    // Generar el código QR
    const qrCodeDataURL = generateQRCode(value);
  
    // Mostrar la imagen del código QR
    return <p style={{width: 320, height: 300}}>{qrCodeDataURL}</p>;
}


function generateQRCode(value) {
    const options = {
      width: 300,
      height: 300,
    };
    let answer = QRCode.toString(value, options, function (err, string) {
        console.log(string)
        string
    })
    return answer;
}